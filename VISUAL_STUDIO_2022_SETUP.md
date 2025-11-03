# 🚀 HƯỚNG DẪN CHẠY VỚI VISUAL STUDIO 2022

## 🎯 GIẢI PHÁP CHÍNH XÁC ĐÃ TÌM RA:

**✅ Chọn "FooterThucHanh.Web" thay vì "IIS Express"**

---

## 🖥️ CÁCH CHẠY TRONG VISUAL STUDIO 2022:

### ✅ Cách ĐÚNG: Kestrel Server (Khuyến nghị)
1. **Mở Visual Studio 2022**
2. **Open Project:** `FooterThucHanh.sln`
3. **Chọn "FooterThucHanh.Web"** trong dropdown (QUAN TRỌNG!)
4. **Nhấn F5** hoặc **Start Debugging**
5. **Truy cập:** `http://localhost:41481`

### ❌ Cách SAI: IIS Express (Không khuyến nghị)
- **IIS Express** có cache riêng và không đọc được cấu hình mới
- Vẫn chạy cổng cũ 44300 → Database trống → Footer không có dữ liệu

---

## 🎯 KẾT QUẢ MONG ĐỢI:

### ✅ Footer sẽ hiển thị 3 cột màu sắc đầy đủ dữ liệu:
- 🔵 **Cột 1 (Xanh dương)**: Kết Nối Với Chúng Tôi + Theo Dõi Chúng Tôi Mới
- 🟢 **Cột 2 (Xanh lá)**: Giờ Làm Việc + Thông Tin Thêm
- 🔷 **Cột 3 (Xanh cyan)**: Liên Hệ Chúng Tôi

### ✅ Admin Panel hoạt động:
- **URL:** `http://localhost:41481/Admin`
- **Có thể edit widgets** không cần code
- **Thêm/sửa/xóa content** dễ dàng

---

## 🔧 VẤN ĐỀ ĐÃ GIẢI QUYẾT:

### 🔍 Nguyên nhân:
- **IIS Express** sử dụng cache riêng
- Không đọc được cấu hình mới từ `launchSettings.json`
- Vẫn chạy trên cổng SSL 44300 cũ

### 🛠️ Giải pháp:
- **Kestrel Server** (FooterThucHanh.Web) đọc đúng cấu hình
- Chạy đúng cổng 41481 như đã cấu hình
- Sử dụng đúng database với tất cả widgets

---

## 📋 CHECKLIST:

- [x] ✅ File `launchSettings.json` đã cấu hình cổng 41481
- [x] ✅ Database `OrchardCore.db` có sẵn với tất cả widgets
- [x] ✅ Chọn "FooterThucHanh.Web" trong dropdown Visual Studio
- [x] ✅ Footer 3 cột hiển thị hoàn hảo với đầy đủ dữ liệu

---

## 🎉 KẾT LUẬN:

**Giải pháp đơn giản nhưng hiệu quả:**
- **Chọn đúng profile:** "FooterThucHanh.Web"
- **Nhấn F5** và thưởng thức Footer 3 cột đẹp mắt!

**🚀 Dự án Footer 3 cột động đã hoàn thành 100%!**