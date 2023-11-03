import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center min-h-screen my-20">
      <p className="mt-10">Xin lỗi, địa chỉ của bạn không tồn tại</p>
      <Link href="/" className="hover:font-bold">
        Quay lại trang chủ 🏠
      </Link>
    </div>
  );
}
