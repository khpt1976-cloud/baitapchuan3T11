# BƯỚC 4: TẠO WIDGET TEMPLATES VỚI FIELD PATHS CHÍNH XÁC

## 🎯 Mục tiêu
Tạo các template Liquid với **FIELD PATHS CHÍNH XÁC** để hiển thị dữ liệu từ Content Types.

## ⚠️ VẤN ĐỀ QUAN TRỌNG
**NGUYÊN NHÂN TEMPLATES KHÔNG HIỂN THỊ DATA:**
- ❌ **Field paths sai**: `Model.ContentItem.FooterContact.CompanyName.Text`
- ✅ **Field paths đúng**: `Model.ContentItem.ContactTitle.Text`

## 📚 Kiến thức cần biết
- **Widget Template**: Template hiển thị Widget
- **Field Access**: Cách truy cập fields từ Content Items
- **Liquid Syntax**: `{{ Model.ContentItem.FieldName.Text }}`

## 🔧 Cấu trúc Template cần tạo

### 1. Widget-FooterSocial.liquid (FooterLeft - Blue)
### 2. Widget-FooterAbout.liquid (FooterCenter - Green)  
### 3. Widget-FooterContact.liquid (FooterRight - Cyan)

---

## 📝 CÁC BƯỚC THỰC HIỆN

### **BƯỚC 4.1: TẠO FOOTERSOCIAL WIDGET TEMPLATE (FOOTERLEFT - BLUE)**

#### 📁 4.1.1: Tạo file template
**Đường dẫn**: `src/ThemeFooterDong/Views/Widget-FooterSocial.liquid`

#### 📝 4.1.2: Nội dung template CHÍNH XÁC
```liquid
{% comment %}
Template hiển thị Widget Footer Social - FooterLeft Zone
Field paths: DisplayText (TitlePart), SocialUrl.Text, SocialIcon.Text
{% endcomment %}

<div class="footer-social-content" style="color: white !important;">
    <h5><i class="fas fa-share-alt me-2"></i>{{ Model.ContentItem.DisplayText }}</h5>
    <p class="mb-3">
        Kết nối với chúng tôi trên mạng xã hội để cập nhật thông tin mới nhất!
    </p>
    <div class="social-links">
        <a href="{{ Model.ContentItem.SocialUrl.Text }}" target="_blank" class="btn btn-outline-light btn-sm">
            <i class="{{ Model.ContentItem.SocialIcon.Text }} me-1"></i>
            {{ Model.ContentItem.SocialUrl.Text }}
        </a>
    </div>
</div>
```

---

### **BƯỚC 4.2: TẠO FOOTERABOUT WIDGET TEMPLATE (FOOTERCENTER - GREEN)**

#### 📁 4.2.1: Tạo file template
**Đường dẫn**: `src/ThemeFooterDong/Views/Widget-FooterAbout.liquid`

#### 📝 4.2.2: Nội dung template CHÍNH XÁC
```liquid
{% comment %}
Template hiển thị Widget Footer About - FooterCenter Zone
Field paths: DisplayText (TitlePart), AboutContent.Text
{% endcomment %}

<div class="footer-about-content" style="color: white !important;">
    <h5>{{ Model.ContentItem.DisplayText }}</h5>
    <p>{{ Model.ContentItem.AboutContent.Text }}</p>
</div>
```

---

### **BƯỚC 4.3: TẠO FOOTERCONTACT WIDGET TEMPLATE (FOOTERRIGHT - CYAN)**

#### 📁 4.3.1: Tạo file template
**Đường dẫn**: `src/ThemeFooterDong/Views/Widget-FooterContact.liquid`

#### 📝 4.3.2: Nội dung template CHÍNH XÁC
```liquid
{% comment %}
Template hiển thị Widget Footer Contact - FooterRight Zone
Field paths: DisplayText (TitlePart), CompanyName.Text, Address.Text, Phone.Text, Email.Text
{% endcomment %}

<div class="footer-contact-content" style="color: white !important;">
    <h5><i class="fas fa-phone me-2"></i>{{ Model.ContentItem.DisplayText }}</h5>
    
    <div class="contact-info">
        <p class="mb-2">
            <i class="fas fa-building me-2"></i>
            <strong>{{ Model.ContentItem.CompanyName.Text }}</strong>
        </p>
        
        <p class="mb-2">
            <i class="fas fa-map-marker-alt me-2"></i>
            {{ Model.ContentItem.Address.Text }}
        </p>
        
        <p class="mb-2">
            <i class="fas fa-phone me-2"></i>
            {{ Model.ContentItem.Phone.Text }}
        </p>
        
        <p class="mb-0">
            <i class="fas fa-envelope me-2"></i>
            <a href="mailto:{{ Model.ContentItem.Email.Text }}" class="text-white text-decoration-none">
                {{ Model.ContentItem.Email.Text }}
            </a>
        </p>
    </div>
</div>
```

---

### **BƯỚC 4.4: TẠO PLACEMENT.JSON (QUAN TRỌNG!)**

#### ⚠️ 4.4.1: Tại sao cần Placement.json?
**NGUYÊN NHÂN TEMPLATES KHÔNG HOẠT ĐỘNG:**
- ❌ **Thiếu Placement.json**: OrchardCore không biết templates nào dùng cho Content Type nào
- ✅ **Có Placement.json**: OrchardCore mapping đúng templates

#### 📁 4.4.2: Tạo file Placement.json
**Đường dẫn**: `src/ThemeFooterDong/Placement.json`

#### 📝 4.4.3: Nội dung Placement.json CHÍNH XÁC
```json
{
  "Widget-FooterSocial": {
    "place": "Content:1"
  },
  "Widget-FooterAbout": {
    "place": "Content:1"
  },
  "Widget-FooterContact": {
    "place": "Content:1"
  }
}
```

#### 🔧 4.4.4: Giải thích Placement.json
```json
{
  "Widget-[ContentTypeName]": {    // Tên template
    "place": "Content:1"           // Vị trí hiển thị
  }
}
```

**Mapping:**
- `Widget-FooterSocial` → `Widget-FooterSocial.liquid`
- `Widget-FooterAbout` → `Widget-FooterAbout.liquid`
- `Widget-FooterContact` → `Widget-FooterContact.liquid`

---

### **BƯỚC 4.5: KIỂM TRA CẤU TRÚC FILES**

#### 📂 4.5.1: Cấu trúc hoàn chỉnh CHÍNH XÁC
```
src/ThemeFooterDong/
├── ThemeFooterDong.csproj
├── Manifest.cs
├── Views/
│   ├── Layout.liquid                    ✅
│   ├── Widget-FooterSocial.liquid       ✅
│   ├── Widget-FooterAbout.liquid        ✅
│   └── Widget-FooterContact.liquid      ✅
├── Placement.json                       ✅ QUAN TRỌNG!
└── wwwroot/
    ├── css/
    └── js/
```

⚠️ **ĐIỂM QUAN TRỌNG:**
- **Layout.liquid**: Nằm trực tiếp trong `Views/Layout.liquid`
- **Widget templates**: Nằm trực tiếp trong `Views/Widget-*.liquid`
- **Placement.json**: Nằm ở root của theme (cùng cấp với Views/)

#### ✅ 4.5.2: Checklist files
- [ ] **Layout.liquid**: Có 3 zones FooterLeft/Center/Right
- [ ] **Widget-FooterSocial.liquid**: Field paths đúng
- [ ] **Widget-FooterAbout.liquid**: Field paths đúng  
- [ ] **Widget-FooterContact.liquid**: Field paths đúng
- [ ] **Placement.json**: Mapping 3 widgets

---

## 🔍 SO SÁNH FIELD PATHS SAI VÀ ĐÚNG

### ❌ **FIELD PATHS SAI (KHÔNG HIỂN THỊ DATA):**
```liquid
<!-- SAI: Có thêm tên Content Type -->
{{ Model.ContentItem.FooterSocial.SocialUrl.Text }}
{{ Model.ContentItem.FooterAbout.AboutTitle.Text }}
{{ Model.ContentItem.FooterContact.CompanyName.Text }}
```

### ✅ **FIELD PATHS ĐÚNG (HIỂN THỊ DATA):**
```liquid
<!-- ĐÚNG: DisplayText cho Title, trực tiếp field name cho các field khác -->
{{ Model.ContentItem.DisplayText }}        <!-- Title từ Title Part -->
{{ Model.ContentItem.SocialUrl.Text }}     <!-- Field -->
{{ Model.ContentItem.AboutContent.Text }}  <!-- Field -->
{{ Model.ContentItem.CompanyName.Text }}   <!-- Field -->
```

---

## ✅ KIỂM TRA KẾT QUẢ

### 🔍 4.6.1: Xác nhận files đã tạo
1. **Kiểm tra 5 files trong theme:**
   ```bash
   src/ThemeFooterDong/Views/Layout.liquid                 ✅ TRỰC TIẾP TRONG VIEWS!
   src/ThemeFooterDong/Views/Widget-FooterSocial.liquid    ✅
   src/ThemeFooterDong/Views/Widget-FooterAbout.liquid     ✅
   src/ThemeFooterDong/Views/Widget-FooterContact.liquid   ✅
   src/ThemeFooterDong/Placement.json                      ✅
   ```

### 🎨 4.6.2: Test templates hoạt động
1. **Restart application**: `dotnet run`
2. **Truy cập website**: Kiểm tra Footer có 3 cột màu sắc
3. **Nếu chưa có data**: Chuyển sang BƯỚC 5 để tạo Content Items

---

## 🎯 KẾT QUẢ MONG ĐỢI

### ✅ Đã hoàn thành:
- **4 template files**: Layout + 3 Widget templates
- **Placement.json**: Mapping templates với Content Types
- **Field paths chính xác**: Templates có thể hiển thị data
- **Styling 3 màu sắc**: Blue, Green, Cyan

---

## 🚀 BƯỚC TIẾP THEO

→ **BƯỚC 5**: Tạo Content Items và gán vào 3 zones

---

---

## ⚠️ GHI CHÚ QUAN TRỌNG

### 🔴 **Điểm quan trọng nhất:**
1. **Placement.json**: BẮT BUỘC để OrchardCore nhận diện templates
2. **Field paths**: Phải chính xác, không có tên Content Type
3. **File names**: Phải theo convention `Widget-[ContentTypeName].liquid`
4. **Zone assignment**: Sẽ thực hiện ở BƯỚC 5

### 🔧 **Nếu templates không hoạt động:**
1. **Kiểm tra Placement.json**: Đảm bảo file tồn tại và syntax đúng
2. **Restart application**: `dotnet run` lại
3. **Kiểm tra Theme active**: Admin → Design → Themes
4. **Kiểm tra file paths**: Đảm bảo đúng thư mục Views/

---

## 📋 TỔNG KẾT FIELD PATHS CHÍNH XÁC

### **FooterSocial Template:**
```liquid
{{ Model.ContentItem.DisplayText }}      <!-- Title từ Title Part -->
{{ Model.ContentItem.SocialUrl.Text }}   <!-- Field -->
{{ Model.ContentItem.SocialIcon.Text }}  <!-- Field -->
```

### **FooterAbout Template:**
```liquid
{{ Model.ContentItem.DisplayText }}        <!-- Title từ Title Part -->
{{ Model.ContentItem.AboutContent.Text }}  <!-- Field -->
```

### **FooterContact Template:**
```liquid
{{ Model.ContentItem.DisplayText }}      <!-- Title từ Title Part -->
{{ Model.ContentItem.CompanyName.Text }} <!-- Field -->
{{ Model.ContentItem.Address.Text }}     <!-- Field -->
{{ Model.ContentItem.Phone.Text }}       <!-- Field -->
{{ Model.ContentItem.Email.Text }}       <!-- Field -->
```