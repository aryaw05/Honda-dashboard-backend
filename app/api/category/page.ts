import Cookies from "js-cookie";
export async function getCategories() {
  const token = Cookies.get("token");
  const result = await fetch("http://localhost:3000/api/kategori/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
  });
  if (!result.ok) {
    console.error("Gagal mengambil data kategori:", result.statusText);
  }
  const data = await result.json();

  return data;
}

export async function addCategory(formData: { nama_kategori: string }) {
  const token = Cookies.get("token");
  const result = await fetch("http://localhost:3000/api/kategori", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token || "",
    },
    body: JSON.stringify(formData),
  });
  if (!result.ok) {
    console.error("Gagal menambahkan data kategori:", result.statusText);
  }
  const data = await result.json();

  return data;
}
