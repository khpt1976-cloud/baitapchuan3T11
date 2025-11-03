# BƯỚC 1: TẠO DỰ ÁN ORCHARDCORE CMS

## 🎯 Mục tiêu
Tạo dự án OrchardCore CMS với Theme cơ bản để chuẩn bị xây dựng Footer 3 cột động.

## 📋 Yêu cầu hệ thống
- **.NET 8.0 SDK**
- **Visual Studio Code** hoặc Visual Studio
- **OrchardCore.ProjectTemplates**

## 🔧 CÁC BƯỚC THỰC HIỆN

### **BƯỚC 1.1: CÀI ĐẶT TEMPLATES**
```bash
dotnet new install OrchardCore.ProjectTemplates::2.2.1-*
```

### **BƯỚC 1.2: TẠO DỰ ÁN**
```bash
# Tạo thư mục dự án
mkdir FooterThucHanh
cd FooterThucHanh

# Tạo solution
dotnet new sln -n FooterThucHanh

# Tạo Web CMS project
dotnet new occms -n FooterThucHanh.Web
dotnet sln add FooterThucHanh.Web/FooterThucHanh.Web.csproj

# Tạo Theme project
mkdir src
cd src
dotnet new octheme -n ThemeFooterDong
cd ..
dotnet sln add src/ThemeFooterDong/ThemeFooterDong.csproj
```

### **BƯỚC 1.3: THÊM REFERENCE THEME**
```bash
cd FooterThucHanh.Web
dotnet add reference ../src/ThemeFooterDong/ThemeFooterDong.csproj
```

### **BƯỚC 1.4: CẤU TRÚC DỰ ÁN**
```
FooterThucHanh/
├── FooterThucHanh.sln
├── FooterThucHanh.Web/                   # Web CMS
│   ├── Program.cs
│   ├── appsettings.json
│   └── FooterThucHanh.Web.csproj
└── src/
    └── ThemeFooterDong/                  # Theme
        ├── ThemeFooterDong.csproj
        ├── Manifest.cs
        ├── Views/
        │   └── Layout.liquid             # Sẽ sửa ở BƯỚC 2
        └── wwwroot/
```

### **BƯỚC 1.5: CHẠY DỰ ÁN LẦN ĐẦU**
```bash
cd FooterThucHanh.Web
dotnet run
```

### **BƯỚC 1.6: THIẾT LẬP BAN ĐẦU**
1. **Truy cập**: `https://localhost:5001`
2. **Setup**: Chọn SQLite database
3. **Admin account**: 
   - Username: `Admin`
   - Password: `Admin123!`
4. **Recipe**: Chọn "Blog"

### **BƯỚC 1.7: KÍCH HOẠT THEME VÀ MODULES**

#### Kích hoạt Theme:
1. `Admin → Design → Themes`
2. Tìm **ThemeFooterDong** → **Set as Default**

#### Kích hoạt Modules:
`Admin → Configuration → Features` - Kích hoạt:
- ✅ **Content Types**
- ✅ **Widgets** 
- ✅ **Layers**
- ✅ **Liquid**

---

## ✅ KẾT QUẢ MONG ĐỢI

- **Dự án OrchardCore CMS** chạy thành công
- **Admin Panel** truy cập được
- **Theme ThemeFooterDong** đã active
- **Modules cần thiết** đã kích hoạt

---

## 🚀 BƯỚC TIẾP THEO

→ **BƯỚC 2**: Tạo Layout với 3 Zones riêng biệt cho Footer

---

## ⚠️ LƯU Ý QUAN TRỌNG

- **Layout.liquid mặc định**: Sẽ được sửa ở BƯỚC 2
- **Theme assets**: Sẽ thêm CSS/JS ở các bước sau
- **Modules**: Content Types, Widgets, Layers, Liquid là bắt buộc