import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center min-h-screen my-20">
      <p className="mt-10">Xin lỗi, nhóm mục của bạn tìm kiếm không tồn tại</p>
      <Link href="/" className="hover:font-bold">
        Quay lại trang chủ 🏠
      </Link>
    </div>
  );
}
