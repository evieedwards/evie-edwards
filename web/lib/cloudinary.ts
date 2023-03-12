const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

const cloudinaryLoader = ({ src, width, quality }) => {
  src = src.replace(baseUrl, "");
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `${baseUrl}/${params.join(",")}${src}`;
};

export default cloudinaryLoader;
