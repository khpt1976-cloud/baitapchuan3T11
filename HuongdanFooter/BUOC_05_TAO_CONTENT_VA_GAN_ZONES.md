# BƯỚC 5: TẠO WIDGETS VÀ GÁN VÀO 3 ZONES

## 🎯 Mục tiêu
Tạo 3 Widgets thông qua **Design → Layers** để hiển thị Footer 3 cột màu sắc khác nhau.

## ⚠️ WORKFLOW THỰC TẾ ORCHARDCORE
**KHÔNG TẠO CONTENT ITEMS TRƯỚC!** OrchardCore workflow:
1. **Design → Layers → Add Widget**
2. **Chọn Content Type** → Tự động tạo Content Item mới
3. **Điền data** → Publish → Widget được tạo và gán Zone

## 📋 FIELDS CẦN ĐIỀN

### **FooterSocial** (2 fields + Title Part):
- **Title** (Title Part) → DisplayText
- **Social URL** (Text Field)
- **Social Icon** (Text Field)

### **FooterAbout** (1 field + Title Part):
- **Title** (Title Part) → DisplayText
- **About Content** (Text Field)

### **FooterContact** (4 fields + Title Part):
- **Title** (Title Part) → DisplayText
- **Company Name** (Text Field)
- **Address** (Text Field)
- **Phone** (Text Field)
- **Email** (Text Field)

---

## 🔧 CÁC BƯỚC THỰC HIỆN

### **BƯỚC 5.1: TẠO FOOTERSOCIAL WIDGET (FOOTERLEFT - XANH DƯƠNG)**

1. **Truy cập**: `Admin → Design → Layers`
2. **Click**: "Always" layer
3. **Scroll xuống tìm zone**: "FooterLeft" 
4. **Click**: "Add Widget" (trong FooterLeft zone)
5. **Dropdown hiện 3 options**: FooterSocial, FooterAbout, FooterContact
6. **Chọn**: "FooterSocial" từ dropdown
7. **Tự động redirect** → Form "New FooterSocial"
8. **Điền thông tin:**
   - **Title**: `Theo Dõi Chúng Tôi`
   - **Social URL**: `https://facebook.com/company`
   - **Social Icon**: `fab fa-facebook`
9. **Click**: "Publish"

---

### **BƯỚC 5.2: TẠO FOOTERABOUT WIDGET (FOOTERCENTER - XANH LÁ)**

1. **Quay lại**: `Design → Layers → Always`
2. **Scroll xuống tìm zone**: "FooterCenter"
3. **Click**: "Add Widget" (trong FooterCenter zone)
4. **Dropdown hiện 3 options**: FooterSocial, FooterAbout, FooterContact
5. **Chọn**: "FooterAbout" từ dropdown
6. **Tự động redirect** → Form "New FooterAbout"
7. **Điền thông tin:**
   - **Title**: `Giờ Làm Việc`
   - **About Content**: `Thứ 2-6: 8:00-17:00, Thứ 7: 8:00-12:00, CN: Nghỉ`
8. **Click**: "Publish"

---

### **BƯỚC 5.3: TẠO FOOTERCONTACT WIDGET (FOOTERRIGHT - XANH CYAN)**

1. **Quay lại**: `Design → Layers → Always`
2. **Scroll xuống tìm zone**: "FooterRight"
3. **Click**: "Add Widget" (trong FooterRight zone)
4. **Dropdown hiện 3 options**: FooterSocial, FooterAbout, FooterContact
5. **Chọn**: "FooterContact" từ dropdown
6. **Tự động redirect** → Form "New FooterContact"
7. **Điền thông tin:**
   - **Title**: `Liên Hệ Chúng Tôi`
   - **Company Name**: `Công Ty TNHH ABC`
   - **Address**: `123 Đường ABC, Q1, TP.HCM`
   - **Phone**: `(028) 1234 5678`
   - **Email**: `contact@company.com`
8. **Click**: "Publish"

---

## ✅ KIỂM TRA KẾT QUẢ

### 🔍 Xác nhận đã tạo thành công:
1. **Design → Layers → Always**: Có 3 widgets trong 3 zones
   - FooterLeft: FooterSocial widget
   - FooterCenter: FooterAbout widget  
   - FooterRight: FooterContact widget
2. **Website**: `http://localhost:44592` - Footer có 3 cột màu sắc khác nhau
3. **Content Items**: Tự động tạo 3 items (không cần tạo trước)

### 🎨 Kết quả mong đợi:
- **Cột trái (Xanh dương)**: Social links với icon Facebook
- **Cột giữa (Xanh lá)**: Giờ làm việc
- **Cột phải (Xanh cyan)**: Thông tin liên hệ công ty

---

## 🚀 BƯỚC TIẾP THEO

→ **BƯỚC 6**: Test và Troubleshooting

---

## ⚠️ LƯU Ý QUAN TRỌNG

### 🔧 **Workflow đúng:**
- **KHÔNG tạo Content Items trước** → Thừa
- **Design → Layers → Add Widget** → Tự động tạo Content Item
- **Chọn đúng Zone** → FooterLeft/Center/Right

### 🚨 **Nếu không hiển thị:**
1. **Kiểm tra Layer**: Always layer có 3 widgets
2. **Kiểm tra Zone**: Đúng FooterLeft/Center/Right
3. **Kiểm tra Published**: Widgets phải Published
4. **Restart app**: `dotnet run` lại
5. **Kiểm tra Theme**: ThemeFooterDong đã active