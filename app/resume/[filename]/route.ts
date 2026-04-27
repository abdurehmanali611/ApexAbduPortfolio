import { readFile } from "node:fs/promises";
import { join } from "node:path";

const PDF_MIME = "application/pdf";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ filename: string }> },
) {
  const { filename } = await params;

  // 1) Prefer a checked-in PDF under /public/resume
  try {
    const publicPath = join(process.cwd(), "public", "resume", filename);
    const buffer = await readFile(publicPath);
    return new Response(buffer, {
      headers: {
        "Content-Type": PDF_MIME,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    // ignore and try env path fallback
  }

  // 2) Fallback for local dev: point to an absolute PDF path with RESUME_FILE_PATH
  const fallback = process.env.RESUME_FILE_PATH;
  if (fallback) {
    const buffer = await readFile(fallback);
    return new Response(buffer, {
      headers: {
        "Content-Type": PDF_MIME,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  }

  return new Response("Resume file not found.", { status: 404 });
}

