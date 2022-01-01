const Regions = {
    1 : ['حصاربوعلی', 'رستم آباد- فرمانیه', 'اوین', 'درکه', 'زعفرانیه', 'محمودیه', 'ولنجک', 'امام زاده قاسم(ع)', 'دربند', 'گلابدره', 'جماران', 'دزاشیب', 'نیاوران', 'اراج', 'کاشانک', 'شهرک دانشگاه', 'شهرک نفت', 'دارآباد', 'باغ فردوس', 'تجریش', 'قیطریه', 'چیذر', 'حکمت', 'ازگل', 'سوهانک', 'شهید محلاتی', 'اتوبان امام علی', 'اتوبان صدر', 'اقدسیه', 'الهیه – فرشته', 'اندرزگو', 'بلوار ارتش', 'پارک وی', 'جمشیدیه', 'دیباجی', 'سعدآباد', 'صاحبقرانیه', 'فرمانیه', 'مقدس اردبیلی', 'مینی سیتی', 'نوبنیاد', 'ولیعصر', 'کامرانیه'],
    2 : ['بوعلی', 'سعادت آباد', 'مدیریت', 'کوهسار', 'پونک', 'شهید چوب تراش', 'شهید خرم رودی', 'صادقیه شمالی شهرک هما', 'صادقیه', 'شهرآرا', 'کوی نصر', 'پردیسان', 'شهرک آزمایش', 'تهران ویلا', 'برق آلستوم', 'تیموری', 'طرشت', 'همایونشهر', 'توحید', 'زنجان', 'شادمهر', 'ایوانک', 'دریا', 'شهرک قدس', 'آسمانها', 'درختی', 'فرحزاد', 'مخابرات', 'پرواز', 'آزادی', 'اتوبان حکیم', 'اتوبان شیخ فضل اله نوری', 'اتوبان محمد علی جناح', 'اتوبان نیایش', 'اتوبان یادگار امام', 'بهبودی', 'جلال آل احمد', 'خوش شمالی', 'ستارخان', 'شادمان', 'شهرک ژاندارمری', 'شهرک غرب', 'گیشا', 'مترو شریف', 'مرزداران'],
    3 : ['آرارات', 'ونک', 'امانیه', 'زرگنده', 'درب دوم', 'رستم آباد و اختیاریه', 'داودیه', 'سید خندان', 'دروس', 'قبا', 'قلهک', 'کاوسیه', 'اختیاریه', 'پاسداران', 'جردن', 'جلفا', 'خواجه عبداله', 'دولت ( کلاهدوز )', 'شیخ بهایی', 'شیراز', 'ظفر', 'ملاصدرا', 'میدان کتابی', 'میرداماد', 'ولیعصر(بین پارک وی ونیایش)'],
    4 : ['مهران', 'کاظم آباد', 'کوهک', 'مجیدیه و شمس آباد', 'پاسداران و ضرابخانه', 'حسین آباد و مبارک آباد', 'شیان و لویزان', 'علم و صنعت', 'نارمک', 'تهرانپارس غربی', 'جوادیه', 'خاک سفید', 'تهرانپارس شرقی', 'قاسم آباد و ده نارمک', 'اوقاف', 'شمیران نو', 'حکیمیه', 'قنات کوثر', 'کوهسار', 'مجید آباد', 'اتوبان بابایی', 'اتوبان باقری', 'اتوبان صیاد شیرازی', 'بنی هاشم', 'پلیس', 'دلاوران', 'رسالت', 'سراج', 'شمس آباد', 'شهدا', 'صیاد شیرازی', 'علم وصنعت', 'فرجام', 'لویزان', 'میدان ملت', 'هروی', 'هنگاممهران', 'کاظم آباد', 'کوهک', 'مجیدیه و شمس آباد', 'پاسداران و ضرابخانه', 'حسین آباد و مبارک آباد', 'شیان و لویزان', 'علم و صنعت', 'نارمک', 'تهرانپارس غربی', 'جوادیه', 'خاک سفید', 'تهرانپارس شرقی', 'قاسم آباد و ده نارمک', 'اوقاف', 'شمیران نو', 'حکیمیه', 'قنات کوثر', 'کوهسار', 'مجید آباد', 'اتوبان بابایی', 'اتوبان باقری', 'اتوبان صیاد شیرازی', 'بنی هاشم', 'پلیس', 'دلاوران', 'رسالت', 'سراج', 'شمس آباد', 'شهدا', 'صیاد شیرازی', 'علم وصنعت', 'فرجام', 'لویزان', 'میدان ملت', 'هروی', 'هنگام'],
    5 : ['شهران جنوبی', 'شهران شمالی', 'شهرزیبا', 'اندیشه', 'بهاران', 'کن', 'المهدی', 'باغ فیض', 'پونک جنوبی', 'پونک شمالی', 'حصارک', 'شهرک نفت', 'کوهسار', 'مرادآباد', 'پرواز', 'سازمان برنامه جنوبی', 'سازمان برنامه شمالی', 'ارم', 'سازمان آب', 'اباذر', 'فردوس', 'مهران', 'اکباتان', 'بیمه', 'آپادانا', 'جنت آباد جنوبی', 'جنت آباد شمالی', 'جنت آباد مرکزی', 'شاهین', 'آیت الله کاشانی', 'اشرفی اصفهانی', 'ایران زمین شمالی', 'بلوار تعاون', 'بلوار فردوس', 'بولیوار', 'پونک', 'پیامبر', 'جنت آباد', 'سازمان برنامه', 'ستاری', 'سردار جنگل', 'سولقان', 'شهر زیبا', 'شهران', 'شهرک اکباتان', 'شهید مهدی باکری'],
    6 : ['نجات اللهی', 'ایرانشهر', 'پارک لاله', 'کشاورز غربی', 'نصرت', '۱۶آذر', 'سنایی', 'بهجت آباد', 'عباس آباد', 'قزل قلعه', 'سیندخت', 'گلها', 'شیراز جنوبی', 'گاندی', 'ساعی', 'یوسف آباد', 'جهاد', 'جنت', 'آرژانتین', 'اتوبان همت', 'اسکندری', 'امیر آباد', 'بلوار کشاورز', 'توانیر', 'جمال زاده', 'حافظ', 'زرتشت', 'طالقانی', 'فاطمی', 'فلسطین', 'میدان انقلاب اسلامی', 'میدان ولیعصر', 'وزراء', 'کارگر شمالی', 'کردستان', 'کریم خان'],
    7 : ['شارق الف', 'دهقان', 'شارق ب', 'گرگان', 'نظام آباد', 'خواجه نصیر و حقوقی', 'خواجه نظام شرقی', 'خواجه نظام غربی', 'کاج', 'امجدیه خاقانی', 'بهار', 'سهروردی باغ صبا', 'شهیدقندی- نیلوفر', 'عباس آباد- اندیشه', 'حشمتیه', 'دبستان', 'ارامنه الف', 'ارامنه ب', 'قصر', 'آپادانا', 'امام حسین', 'انقلاب', 'خواجه نظام', 'سرباز', 'سهروردی', 'شریعتی', 'شهید مدنی', 'شیخ صفی', 'عباس آباد', 'مدنی', 'مرودشت', 'مطهری', 'مفتح جنوبی', 'هفت تیر'],
    8 : ['تهرانپارس', 'دردشت', 'مدائن', 'هفت حوض', 'فدک', 'زرکش', 'نارمک', 'مجیدیه', 'کرمان', 'لشگر شرقی', 'لشگر غربی', 'وحیدیه', 'تسلیحات', 'جشنواره', 'سبلان'],
    9 : ['استادمعین', 'دکتر هوشیار', 'شهید دستغیب', 'فتح', 'امامزاده عبداله', 'شمشیری', 'سرآسیاب مهرآباد', 'مهرآبادجنوبی', 'استاد معین', 'سی متری جی', 'طوس', 'مهر آباد جنوبی', 'مهرآباد', 'امامزاده عبدالله', 'فتح – صنعتی'],
    10 :['بریانک', 'سلیمانی تیموری', 'شبیری جی', 'هفت چنار', 'سلسبیل جنوبی', 'کارون جنوبی', 'هاشمی', 'زنجان جنوبی', 'سلسبیل شمالی', 'کارون شمالی', 'آذربایجان', 'آزادی', 'امام خمینی', 'جیحون', 'حسام الدین', 'خوش', 'دامپزشکی', 'رودکی', 'سینا', 'قصرالدشت', 'مالک اشتر', 'نواب', 'کارون', 'کمیل'],
    11 :['شیخ هادی', 'انقلاب', 'امیریه ( فرهنگ )', 'فروزش', 'قلمستان', 'منیریه', 'حشمت الدوله – جمالزاده', 'اسکندری', 'دخانیات', 'مخصوص', 'جمهوری', 'حر', 'انبار نفت', 'آگاهی', 'راه آهن', 'عباسی', 'هلال احمر', 'ابوسعید', 'اسکندری جنوبی', 'پاستور', 'حسن آباد', 'گمرک', 'وحدت اسلامی', 'ولیعصر', 'کارگر جنوبی', 'کاشان'],
    12 :['بهارستان', 'فردوسی', 'امامزاده یحیی', 'پامنار', 'بازار', 'سنگلج', 'تختی', 'هرندی', 'آبشار', 'قیام', 'کوثر', 'ایران', 'دروازه شمیران', 'امین حضور', 'پانزده خرداد', 'پیچ شمیران', 'خراسان', 'ری', 'سعدی', 'لاله زارنو', 'مولوی', 'میدان قیام'],
    13 :['صفا', 'شهید اسدی', 'زاهد گیلانی', 'اشراقی', 'دهقان', 'نیروی هوایی', 'پیروزی', 'حافظیه', 'امامت', 'شورا', 'آشتیانی', 'زینبیه', 'سرخه حصار', 'تهران نو', 'دماوند', 'نیرو هوایی'],
    14 :['شکوفه', 'چهارصد دستگاه', 'جابری', 'دژکام', 'شاهین', 'مینای شمالی', 'نیکنام', 'آهنگران', 'بروجردی', 'صد دستگاه', 'فرزانه', 'سر آسیب دولاب', 'شیوا', 'نبی اکرم (ص)', 'شهرابی ( قیام )', 'شکیب', 'پرستار', 'سیزده آبان', 'ابوذر', 'تاکسیرانی', 'مینای جنوبی', 'دولاب', 'خاوران', 'آهنگ شرقی', 'آهنگ', 'قصر فیروزه', 'اتوبان محلاتی', 'افراسیابی شمالی', 'اندرزگو', 'پاسدارگمنام', 'شهید محلاتی', 'فلاح', 'نبرد', 'هفده شهریور'],
    15 :['مظاهری', 'مینابی', 'بیسیم', 'شوش', 'طیب', 'مطهری', 'ابوذر', 'هاشم آباد', 'اتابک', 'شهید بروجردی', 'کیانشهر شمالی', 'کیانشهر جنوبی', 'رضویه', 'مشیریه', 'افسریه شمالی', 'افسریه جنوبی', 'مسعودیه', 'والفجر', 'قیامدشت', 'خاورشهر', 'آهنگ', 'اتوبان بعثت', 'افسریه', 'خاوران', 'مشیریه'],
    16 :['جوادیه', 'نازی آباد', 'خزانه', 'شهرک بعثت', 'علی آباد شمالی', 'یاخچی آباد و چهارصد دستگاه', 'تختی', 'علی آباد جنوبی', 'باغ آذری', 'راه آهن', 'رجایی', 'هلال احمر', 'یاخچی آباد'],
    17 :['ابوذر غربی', 'آذری', 'امامزاده حسن(ع)', 'یافت آباد', 'جلیلی', 'زهتابی', 'زمزم', 'سجاد', 'گلچین', 'وصفنارد', 'ابوذر شرقی', 'باغ خزانه', 'بلورسازی', 'مقدم', 'ابوذر', 'امام زاده حسن', 'قزوین', 'قلعه مرغی', 'میدان بهاران'],
    18 :['فردوس', 'تولیدارو', 'بهداشت', 'ولیعصر شمالی', 'رجائی', 'ولیعصر جنوبی', 'صادقیه', 'صاحب الزمان', 'یافت آباد جنوبی', 'یافت آباد شمالی', 'شاد آباد', 'هفده شهریور', 'امام خمینی (ره )', 'شمس آباد', 'خلیج فارس شمالی', 'خلیج فارس جنوبی', 'اتوبان آزادگان', 'خلیج فارس', 'سعید آباد', 'شهرک صاحب الزمان', 'شهرک ولیعصر'],
    19 :['خانی آباد نو شمالی', 'اسفندیاری و بستان', 'بهمنیار', 'خانی آباد نو جنوبی', 'شریعتی جنوبی', 'شریعتی شمالی', 'شکوفه جنوبی', 'شکوفه شمالی', 'نعمت آباد', 'دولت خواه', 'اسماعیل آباد', 'شهید کاظمی', 'رسالت', 'خانی آباد نو', 'عبدل آباد'],
    20 :['اقدسیه', 'صفائیه', 'ظهیر آباد', 'غیوری', 'جوانمرد', 'حمزه آباد', 'دیلمان', 'فیروزآبادی', 'منصوریه', '۱۳آبان', 'دولت اباد', 'شهادت', 'استخر', 'بهشتی', 'سرتخت', 'علائین', 'نفر آباد', 'ولی آباد', 'امین آباد', 'تقی آباد', 'نظامی', 'عباس آباد', 'کهریزک'],
    21 :['شهرک دریا', 'تهرانسر غربی', 'تهرانسر شرقی', 'باشگاه نفت', 'تهرانسر مرکزی', 'شهرک پاسداران', 'تهرانسر شمالی', 'شهرک آزادی', 'شهرک فرهنگیان', 'شهرک استقلال', 'شهرک دانشگاه', 'چیتگر شمالی', 'چیتگر جنوبی', 'ویلا شهر', 'وردآورد', 'شهرک غزالی', 'شهرک شهرداری', 'اتوبان تهران کرج', 'بزرگراه فتح', 'تهرانسر', 'شهرک ۲۲بهمن', 'شهرک دانشگاه شریف'],
    22 :['دهکده المپیک', 'زیبا دشت بالا', 'گلستان شرقی', 'زیبادشت پائین', 'شریف', 'گلستان غربی', 'امید – دژبان', 'شهید باقری', 'آزادشهر', 'پیکان شهر', 'دریاچه چیتگر', 'شهرک راه آهن – شهرک گلستان']
}

export default Regions;