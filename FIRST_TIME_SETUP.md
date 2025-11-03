# 🚀 HƯỚNG DẪN SETUP LẦN ĐẦU - FOOTER 3 CỘT

## ⚠️ VẤN ĐỀ: Download code lần đầu, Footer không hiển thị dữ liệu

### 🔍 NGUYÊN NHÂN:
- Database SQLite có thể không được đồng bộ hoàn toàn
- OrchardCore tạo database mới nếu không tìm thấy dữ liệu
- Binary file (.db) có thể bị conflict trong Git

---

## 🛠️ GIẢI PHÁP A: KIỂM TRA DATABASE

### Bước 1: Kiểm tra file database
```bash
# Kiểm tra file database có tồn tại không
ls -la FooterThucHanh/FooterThucHanh.Web/App_Data/Sites/Default/

# Nếu có OrchardCore.db thì kiểm tra size
du -h FooterThucHanh/FooterThucHanh.Web/App_Data/Sites/Default/OrchardCore.db
```

### Bước 2: Nếu database trống hoặc không có
```bash
# Xóa database cũ (nếu có)
rm FooterThucHanh/FooterThucHanh.Web/App_Data/Sites/Default/OrchardCore.db

# Chạy lại ứng dụng để tạo database mới
cd FooterThucHanh
dotnet run
```

---

## 🛠️ GIẢI PHÁP B: SETUP LẠI TỪ ADMIN PANEL

### Bước 1: Truy cập Admin Panel
```
http://localhost:5000/Admin
```

### Bước 2: Tạo lại Content Types
- Vào **Content → Content Types**
- Tạo 3 Content Types:
  - `FooterSocial` (với HTML Body Field)
  - `FooterAbout` (với HTML Body Field)
  - `FooterContact` (với HTML Body Field)

### Bước 3: Tạo lại Templates
- Vào **Design → Templates**
- Tạo 3 templates theo hướng dẫn trong `3.HUONG_DAN_TAO_3_TEMPLATES.md`

### Bước 4: Tạo lại Widgets
- Vào **Design → Widgets**
- Tạo widgets theo hướng dẫn trong `4.HUONG_DAN_TAO_3_WIDGETS.md`

---

## 🛠️ GIẢI PHÁP C: SỬ DỤNG RECIPE (KHUYẾN NGHỊ)

### Bước 1: Import Recipe
```bash
# Copy file recipe vào thư mục Recipes
cp footer-setup-recipe.json FooterThucHanh/FooterThucHanh.Web/Recipes/
```

### Bước 2: Chạy Recipe từ Admin
- Vào **Configuration → Recipes**
- Chọn "Footer 3 Cột Setup"
- Click **Execute**

---

## 🎯 KIỂM TRA KẾT QUẢ

Sau khi setup, truy cập: `http://localhost:5000`

**Footer phải hiển thị 3 cột màu sắc:**
- 🔵 **Cột 1 (Xanh dương)**: Kết Nối Với Chúng Tôi
- 🟢 **Cột 2 (Xanh lá)**: Giờ Làm Việc
- 🔷 **Cột 3 (Xanh cyan)**: Liên Hệ Chúng Tôi

---

## 📞 HỖ TRỢ

Nếu vẫn gặp vấn đề:
1. Kiểm tra Console log có lỗi không
2. Kiểm tra file `appsettings.json` 
3. Đảm bảo .NET 8.0 đã được cài đặt
4. Thử chạy với `dotnet clean` trước

**🎉 Sau khi setup thành công, Footer sẽ hoạt động hoàn hảo!**