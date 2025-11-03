# 🚀 HƯỚNG DẪN CHẠY VỚI VISUAL STUDIO 2022

## 🎯 VẤN ĐỀ ĐÃ GIẢI QUYẾT:
Visual Studio 2022 tự động chọn cổng khác nhau → Database không được sử dụng đúng

## ✅ GIẢI PHÁP ĐÃ CẤU HÌNH:

### 📁 File `Properties/launchSettings.json` đã được cấu hình:
```json
{
  "iisSettings": {
    "iisExpress": {
      "applicationUrl": "http://localhost:41481",  ← CÙNG CỔNG VỚI DATABASE
      "sslPort": 0                                 ← TẮT SSL
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true
    },
    "FooterThucHanh.Web": {
      "commandName": "Project", 
      "applicationUrl": "http://localhost:41481"   ← CÙNG CỔNG VỚI DATABASE
    }
  }
}
```

---

## 🖥️ CÁCH CHẠY TRONG VISUAL STUDIO 2022:

### Cách 1: IIS Express (Khuyến nghị)
1. **Mở Visual Studio 2022**
2. **Open Project:** `FooterThucHanh.sln`
3. **Chọn "IIS Express"** trong dropdown
4. **Nhấn F5** hoặc **Start Debugging**
5. **Truy cập:** `http://localhost:41481`

### Cách 2: Kestrel Server
1. **Chọn "FooterThucHanh.Web"** trong dropdown
2. **Nhấn F5** hoặc **Start Debugging**
3. **Truy cập:** `http://localhost:41481`

---

## 🎯 KẾT QUẢ MONG ĐỢI:

### ✅ Footer sẽ hiển thị 3 cột màu sắc:
- 🔵 **Cột 1 (Xanh dương)**: Kết Nối Với Chúng Tôi
- 🟢 **Cột 2 (Xanh lá)**: Giờ Làm Việc + Thông Tin Thêm
- 🔷 **Cột 3 (Xanh cyan)**: Liên Hệ Chúng Tôi

### ✅ Admin Panel hoạt động:
- **URL:** `http://localhost:41481/Admin`
- **Có thể edit widgets** không cần code
- **Thêm/sửa/xóa content** dễ dàng

---

## 🔧 TROUBLESHOOTING:

### Nếu vẫn không hiển thị Footer:
1. **Kiểm tra URL:** Đảm bảo đang truy cập `http://localhost:41481`
2. **Clear Browser Cache:** Ctrl+F5
3. **Restart Visual Studio:** Đóng và mở lại VS2022
4. **Check Console:** F12 → Console tab, xem có lỗi không

### Nếu cổng bị conflict:
1. **Đổi cổng khác:** Sửa `41481` thành `41482` trong `launchSettings.json`
2. **Restart Visual Studio**
3. **Truy cập cổng mới**

---

## 📋 CHECKLIST:

- [x] ✅ File `launchSettings.json` đã cấu hình cổng 41481
- [x] ✅ Database `OrchardCore.db` có sẵn với tất cả widgets
- [x] ✅ Visual Studio 2022 sẽ chạy đúng cổng
- [x] ✅ Footer 3 cột sẽ hiển thị hoàn hảo

---

## 🎉 KẾT LUẬN:

**Giờ anh chạy Visual Studio 2022 sẽ có cùng kết quả như máy em!**
- **Cùng cổng 41481** → **Cùng database** → **Cùng Footer 3 cột đẹp!**

**🚀 Chỉ cần F5 và thưởng thức thành quả!**