const DB = {
    products: [
        { id: 1, name: 'مكيف سبليت 18 ألف وحدة', category: 'مكيفات', price: 2500, stock: 15, image: 'ac.jpg' },
        { id: 2, name: 'ثلاجة 14 قدم استيل', category: 'ثلاجات', price: 3200, stock: 8, image: 'fridge.jpg' },
        { id: 3, name: 'غسالة ملابس 7 كيلو', category: 'غسالات', price: 1800, stock: 12, image: 'washer.jpg' },
        { id: 4, name: 'خلاط كهربائي 400 واط', category: 'أدوات مطبخ', price: 150, stock: 45, image: 'blender.jpg' },
        { id: 5, name: 'شاشة سمارت 55 بوصة', category: 'شاشات', price: 2100, stock: 20, image: 'tv.jpg' }
    ],
    sales: [
        { id: 'INV-1001', date: '2026-05-01', customer: 'أحمد علي', total: 2500, status: 'مدفوع' },
        { id: 'INV-1002', date: '2026-05-02', customer: 'شركة الأمل التجارية', total: 5400, status: 'مدفوع' },
        { id: 'INV-1003', date: '2026-05-02', customer: 'خالد محمد عبد الله', total: 1200, status: 'قيد الانتظار' }
    ],
    stats: {
        dailySales: 128750,
        dailyPurchases: 84300,
        totalCustomers: 450,
        lowStockItems: 5,
        monthlyGrowth: '+12.5%'
    }
};

// Make DB globally available
window.erpDatabase = DB;
console.log('Database initialized successfully.');
