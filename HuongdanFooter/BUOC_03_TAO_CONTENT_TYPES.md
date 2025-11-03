# BƯỚC 3: TẠO CONTENT TYPES CHO FOOTER

## 🎯 Mục tiêu
Tạo 3 Content Types với field names chính xác để tránh lỗi field paths trong templates.

## 📝 Content Types cần tạo
1. **FooterContact** - 4 fields + Title Part
2. **FooterSocial** - 2 fields + Title Part
3. **FooterAbout** - 1 field + Title Part

---

## 🔧 CÁC BƯỚC THỰC HIỆN

### **BƯỚC 3.1: TẠO FOOTERCONTACT**

#### Tạo Content Type:
1. **Truy cập**: `Admin → Content → Content Definition → Content Types`
2. **Click**: "Create new type"
3. **Điền thông tin**:
   - **Technical Name**: `FooterContact`
   - **Display Name**: `Footer Contact`
   - **Stereotype**: `Widget` ⚠️ **BẮT BUỘC**
4. **Click**: "Create"

#### Thêm 4 Fields:
1. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Company Name`
   - **Technical Name**: `CompanyName`
   - **Click "Add"**

2. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Address`
   - **Technical Name**: `Address`
   - **Click "Add"**

3. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Phone`
   - **Technical Name**: `Phone`
   - **Click "Add"**

4. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Email`
   - **Technical Name**: `Email`
   - **Click "Add"**

#### Thêm Title Part:
1. **Click "Add Parts"**
2. **Tích chọn "Title"** ✅
3. **Click "Save"**

**Click "Save"**

### **BƯỚC 3.2: TẠO FOOTERSOCIAL**

#### Tạo Content Type:
1. **Quay lại**: Content Types List
2. **Click**: "Create new type"
3. **Điền thông tin**:
   - **Technical Name**: `FooterSocial`
   - **Display Name**: `Footer Social`
   - **Stereotype**: `Widget`
4. **Click**: "Create"

#### Thêm 2 Fields:
1. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Social URL`
   - **Technical Name**: `SocialUrl`
   - **Click "Add"**

2. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `Social Icon`
   - **Technical Name**: `SocialIcon`
   - **Click "Add"**

#### Thêm Title Part:
1. **Click "Add Parts"**
2. **Tích chọn "Title"** ✅
3. **Click "Save"**

⚠️ **QUAN TRỌNG**: 
- **Add Field**: Không có Title option
- **Add Parts**: Mới có Title Part
- **Title Part**: Cung cấp `DisplayText` cho template

**Click "Save"**

### **BƯỚC 3.3: TẠO FOOTERABOUT**

#### Tạo Content Type:
1. **Quay lại**: Content Types List
2. **Click**: "Create new type"
3. **Điền thông tin**:
   - **Technical Name**: `FooterAbout`
   - **Display Name**: `Footer About`
   - **Stereotype**: `Widget`
4. **Click**: "Create"

#### Thêm 1 Field:
1. **Click "Add Field"** → Chọn **Text Field**
   - **Display Name**: `About Content`
   - **Technical Name**: `AboutContent`
   - **Click "Add"**

#### Thêm Title Part:
1. **Click "Add Parts"**
2. **Tích chọn "Title"** ✅
3. **Click "Save"**

**Click "Save"**

---

## ✅ KIỂM TRA KẾT QUẢ

### Xác nhận đã tạo thành công:
1. **Content Types List**: 3 Content Types với Stereotype = Widget
2. **Design → Widgets → Add Widget**: 3 Widget Types xuất hiện

---

## 📋 TỔNG KẾT FIELD NAMES (NHẤT QUÁN)

### **FooterContact** (4 fields + Title Part):
- `DisplayText` - Title (từ **Title Part**) ⚠️ **Nhất quán**
- `CompanyName` - Company Name (Text Field)
- `Address` - Address (Text Field)
- `Phone` - Phone (Text Field)
- `Email` - Email (Text Field)

### **FooterSocial** (2 fields + Title Part):
- `DisplayText` - Title (từ **Title Part**) ⚠️ **Nhất quán**
- `SocialUrl` - Social URL (Text Field)
- `SocialIcon` - Social Icon (Text Field)

### **FooterAbout** (1 field + Title Part):
- `DisplayText` - Title (từ **Title Part**) ⚠️ **Nhất quán**
- `AboutContent` - About Content (Text Field)

---

## 🚀 BƯỚC TIẾP THEO

→ **BƯỚC 4**: Tạo Widget Templates với field paths chính xác

---

## ⚠️ LƯU Ý QUAN TRỌNG

- **Stereotype = Widget**: BẮT BUỘC để xuất hiện trong Design → Widgets
- **Field names**: Phải chính xác để templates hoạt động đúng
- **Add Field vs Add Parts**: Field không có Title, chỉ Parts mới có Title
- **Title Part**: Phải thêm qua "Add Parts", cung cấp DisplayText
- **DisplayText**: Truy cập qua `Model.ContentItem.DisplayText` trong template