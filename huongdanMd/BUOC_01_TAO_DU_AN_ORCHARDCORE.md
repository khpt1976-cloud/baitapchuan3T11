# BƯỚC 1: TẠO DỰ ÁN ORCHARDCORE CMS

## Mục tiêu
Tạo dự án OrchardCore CMS chuẩn để xây dựng Footer động có thể quản trị qua Admin Panel.

## Yêu cầu hệ thống
- .NET 8.0 SDK
- Visual Studio Code hoặc Visual Studio
- OrchardCore.ProjectTemplates

## Các bước thực hiện

### 1. Cài đặt OrchardCore Project Templates
```bash
dotnet new install OrchardCore.ProjectTemplates::2.2.1-*
```

### 2. Tạo dự án OrchardCore CMS
```bash
# Tạo thư mục dự án chính
mkdir FooterThucHanh
cd FooterThucHanh

# Tạo solution
dotnet new sln -n FooterThucHanh

# Tạo dự án Web CMS
dotnet new occms -n FooterThucHanh.Web

# Thêm Web project vào solution
dotnet sln add FooterThucHanh.Web/FooterThucHanh.Web.csproj

# Tạo thư mục src cho themes
mkdir src

# Tạo theme trong thư mục src
cd src
dotnet new octheme -n ThemeFooterDong

# Thêm theme project vào solution
cd ..
dotnet sln add src/ThemeFooterDong/ThemeFooterDong.csproj
```

### 3. Cấu trúc dự án được tạo (theo chuẩn OrchardCore)
```
FooterThucHanh/
├── FooterThucHanh.sln                    # Solution file
├── FooterThucHanh.Web/                   # Web CMS Project
│   ├── Program.cs                        # Entry point
│   ├── appsettings.json                  # Configuration
│   ├── Properties/launchSettings.json    # Launch settings
│   ├── FooterThucHanh.Web.csproj        # Web project file
│   └── wwwroot/                         # Static files
└── src/                                 # Source folder
    └── ThemeFooterDong/                 # Theme Project
        ├── ThemeFooterDong.csproj       # Theme project file
        ├── Manifest.cs                  # Theme manifest
        ├── Views/
        │   └── Layout.liquid            # Layout template
        └── wwwroot/                     # Theme assets (BỔ SUNG)
            ├── Theme.png                # Thumbnail 240x240px
            ├── css/
            │   └── site.css             # Custom CSS
            ├── js/
            │   └── site.js              # Custom JavaScript
            └── images/                  # Theme images
```

### 4. BỔ SUNG THEME ASSETS (CHUẨN ORCHARDCORE)

#### 4.1. Tạo cấu trúc wwwroot cho theme
```bash
cd src/ThemeFooterDong
mkdir -p wwwroot/{css,js,images}
```

#### 4.2. Tạo Theme.png (thumbnail cho Admin UI)
- Kích thước: 240x240 pixels
- Đặt tại: `src/ThemeFooterDong/wwwroot/Theme.png`
- Hiển thị trong Admin → Design → Themes

#### 4.3. Tạo Custom CSS
```css
/* src/ThemeFooterDong/wwwroot/css/site.css */
/* ===== FOOTER THEME CUSTOM STYLES ===== */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

footer {
    background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    color: white;
    padding: 40px 0 20px;
    margin-top: auto;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}
/* ... thêm CSS khác */
```

#### 4.4. Tạo Custom JavaScript
```javascript
/* src/ThemeFooterDong/wwwroot/js/site.js */
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        initializeTheme();
    });
    
    function initializeTheme() {
        console.log('🎨 Footer Theme initialized');
        initSmoothScrolling();
        initFooterAnimations();
        initBackToTop();
    }
    /* ... thêm JS khác */
})();
```

#### 4.5. Cập nhật Layout.liquid để include assets
```liquid
<!-- src/ThemeFooterDong/Views/Layout.liquid -->
<!DOCTYPE html>
<html lang="{{ Culture.Name }}">
<head>
    <meta charset="utf-8">
    <title>{% page_title Site.SiteName, position: "before", separator: " - " %}</title>
    
    {% resources type: "Meta" %}
    {% resources type: "HeadLink" %}
    
    <!-- THEME CUSTOM CSS -->
    {% style src: "~/ThemeFooterDong/css/site.css" %}
    
    {% resources type: "Stylesheet" %}
    {% resources type: "HeadScript" %}
</head>
<body dir="{{ Culture.Dir }}">
    {% render_body %}
    
    <footer>
        {% render_section "Footer", required: false %}
    </footer>
    
    <!-- THEME CUSTOM JS -->
    {% script src: "~/ThemeFooterDong/js/site.js", at: "Foot" %}
    
    {% resources type: "FootScript" %}
</body>
</html>
```

### 5. Thêm reference Theme vào Web project
```bash
# Thêm reference theme vào web project
cd FooterThucHanh.Web
dotnet add reference ../src/ThemeFooterDong/ThemeFooterDong.csproj
```

### 6. Chạy dự án lần đầu
```bash
# Từ thư mục FooterThucHanh.Web
dotnet run
```

### 7. Thiết lập ban đầu
1. Mở trình duyệt: `https://localhost:5001`
2. Chọn **Setup** để cấu hình
3. Chọn **SQLite** làm database
4. Tạo tài khoản Admin pass là Admin123! 
5. Chọn recipe **Blog** 
Username: Admin (not "admin")
Password: Admin123!

### 8. Kích hoạt Theme và các modules cần thiết

#### 8.1. Kích hoạt Theme
1. Vào Admin Panel → Design → Themes
2. Tìm **ThemeFooterDong** (có thumbnail)
3. Click **Set as Default**

#### 8.2. Kích hoạt modules
Vào Admin Panel → Configuration → Features, kích hoạt:
- ✅ **Content Types** (quản lý Content Types)
- ✅ **Widgets** (tạo widgets)
- ✅ **Layers** (gán widgets vào zones)
- ✅ **Liquid** (template engine)
- ✅ **Templates** (quản lý templates)

## Kết quả mong đợi
- Dự án OrchardCore CMS chạy thành công
- Truy cập được Admin Panel
- Các modules cần thiết đã được kích hoạt

## Bước tiếp theo
→ **BƯỚC 2**: Tạo Layout với Zones để định nghĩa vùng Footer

## ✅ CHECKLIST THEME CHUẨN ORCHARDCORE

### Cấu trúc bắt buộc:
- ✅ **Manifest.cs** - Theme metadata
- ✅ **.csproj** - Microsoft.NET.Sdk.Razor + packages
- ✅ **Views/Layout.liquid** - Layout chính
- ✅ **wwwroot/Theme.png** - Thumbnail 240x240px
- ✅ **wwwroot/css/site.css** - Custom styles
- ✅ **wwwroot/js/site.js** - Custom scripts

### Tính năng theme:
- ✅ **Responsive design** - Mobile friendly
- ✅ **Footer animations** - Smooth effects
- ✅ **Back to top button** - UX enhancement
- ✅ **Social links effects** - Interactive
- ✅ **Form enhancements** - Better UX
- ✅ **Smooth scrolling** - Navigation

## Ghi chú quan trọng
- OrchardCore sử dụng kiến trúc **modular** và **multi-tenant**
- Mọi thứ đều có thể quản trị qua Admin Panel
- Footer sẽ được tạo thành **Widget** và gán vào **Zone**
- **Theme assets** được load tự động từ wwwroot/
- **Liquid templates** hỗ trợ đầy đủ OrchardCore features