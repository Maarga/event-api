export function errorHandler(error, req, res, next) {
  // Буруу JSON body, жишээ нь { "title": }
  if (error.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Invalid JSON body" });
  }

  // Prisma-ийн алдааны кодуудыг 3-р үе шатанд энд нэмнэ

  console.error(error);
  res.status(500).json({ message: "Internal server error" });
}