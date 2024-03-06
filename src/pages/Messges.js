// import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from "@mui/material/Box";
import NAvbar from '../components/Navbar'
// import Chat from './Chat';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function Settings() {

  const governoratesData = [
    {
      "code": "01",
      "governorate_name_ar": "القاهرة",
      "cities": [
        "القاهره",
        "مدينه الشروق",
        "مدينه بدر",
        "مدينتى",
        "الرحاب",
        "حدائق العاصمه",
        "العاصمه الاداريه الجديده",
        "القاهره الجديده",
        "العبور",
        "15 مايو",
        "مدينه السلام",
        "حلوان",
        "اخري"
      ],
      "police": [
        "اخري",
        "مدينه الشروق",
        "مدينه بدر",
        "الزمالك",
        "روض الفرج",
        "الساحل",
        "شبرا",
        "الزيتون",
        "حدائق القبه",
        "الزاويه الحمراء",
        "الشرابيه",
        "حلوان",
        "المعصره",
        "المعادي",
        "البساتين",
        "دار السلام",
        "السيده زينب",
        "الخليفه",
        "المقطم",
        "مصر القديمه",
        "التبين",
        "15مايو",
        "المرج",
        "القاهره الجديده اول",
        "القاهره الجديده ثاني",
        "القاهره الجديده ثالث",
        "مصر الجديده",
        "النزهه",
        "مدينه نصر اول",
        "مدينه نصر ثاني",
        "عين شمس",
        "مدينه السلام اول",
        "مدينه السلام ثاني",
        "المطريه",
        "عابدين",
        "الازبكيه",
        "بولاق ابو العلا",
        "الدرب الاحمر",
        "الموسكي",
        "الوايلي",
        "الجماليه",
        "الظاهر",
        "باب الشعريه",
        "منشاه ناصر",
        "الاميريه",
        "النهضه",
        "قصر النيل",
        "طره",
        "العاصمه الاداريه",
        "التجمع الخامس"
      ]
    },
    {
      "code": "21",
      "governorate_name_ar": "الجيزة",
      "cities": [
        "6 اكتوبر",
        "الشيخ زايد",
        "امبابه",
        " الجيزه",
        "الهرم",
        "العجوزه",
        "الدقى",
        "بولاق الدكرور",
        "العمرانيه",
        "ابو النمرس",
        "البدرشين",
        "الحوامديه",
        "الصف",
        "اطفيح",
        "منشأه القناطر",
        "الوراق",
        "اوسيم",
        "كرداسه",
        "العياط",
        "الباويطى",

      ],
      "police": [
        "6اكتوبر اول",
        "6اكتوبرثاني",
        "حدائق اكتوبر",
        "الشيخ زايد",
        "امبابه",
        "مركز منشاه القناطر",
        "الجيزه",
        "الطالبيه",
        "الاهرام",
        "الدقي",
        "العجوزه",
        "بولاق الدكرور",
        "العمرانيه",
        "ابو النمرس",
        "مركز البدرشين",
        "الحوامديه",
        "مركز الصف",
        "مركز اطفيح",
        "الوراق",
        "مركز اوسيم",
        "الواحات البحريه",
        "مركز العياط",
        "مركز كرداسه"
      ]

    },
    {
      "code": "02",
      "governorate_name_ar": "الأسكندرية",
      "cities": [
        " الاسكندريه",
        " برج العرب",
        " مدينه النوباريه الجديده",
        " برج العرب الجديده",
      ],
      "police": [
        "المنتزه اول",
        "المنتزه ثاني",
        "المنتزه ثالث",
        "الرمل اول",
        "الرمل ثاني",
        "سيدي جابر",
        "باب شرق",
        "المنشيه",
        "العطارين",
        "اللبان",
        "الجمرك",
        "كرموز",
        "محرم بك",
        "الدخيله",
        "مينا البصل",
        "العامريه أول",
        "العامرية ثانية",
        "برج العرب"
      ]

    },
    {
      "code": "12",
      "governorate_name_ar": "الدقهلية",
      "cities": [
        "المنصوره",
        "طلخا",
        "نبروه",
        "اجا",
        "ميت غمر",
        "السنبلاوين",
        "تمى الامديد",
        "دكرنس",
        "منيه النصر",
        "الكردى",
        "المنزله",
        "ميت سلسيل",
        "المطريه",
        "الجماليه",
        "شربين",
        "بنى عبيد",
        "بلقاس",
        "جمصه",

      ],
      "police": [
        "المنصوره اول",
        "المنصوره ثاني",
        "مركز المنصوره",
        "مركز محله دمنه",
        "مركز بلقاس",
        "جمصه",
        "مركز طلخا",
        "مركز نبروه",
        "مركز دكرنس",
        "مركز بني عبيد",
        "مركز شربين",
        "مركز المنزله",
        "مركز المطريه",
        "مركز منيه النصر",
        "مركز الجماليه",
        "مركز ميت سلسيل",
        "الكردي",
        "ميت غمر",
        "مركز ميت غمر",
        "مركز اجا",
        "مركز السنبلاوين",
        "مركز تمي الامديد",
        "المنصوره الجديده"
      ]

    },
    {
      "code": "31",
      "governorate_name_ar": "البحر الأحمر",
      "cities": [],
      "police": []
    },
    {
      "code": "18",
      "governorate_name_ar": "البحيرة",
      "cities": [
        "دمنهور",
        "المحمودية",
        "حوش عيسى",
        "ابو المطامير",
        "رشيد",
        "رشيد الجديده",
        "ادكو",
        "شبرا خيت",
        "الرحمانيه",
        "ابو حمص",
        "ايتاى البارود",
        "كوم حماده",
        "بدر",
        "كفر الدوار",
        "الدلنجات",
        "وادى النطرون",
        'النوباريه',
      ],
      "police": [
        "دمنهور",
        "مركز دمنهور",
        "مركز المحموديه",
        "مركز الرحمانيه",
        "كفر الدوار",
        "مركز كفر الدوار",
        "مركز رشيد",
        "مركز ادكو",
        "مركز ابو المطامير",
        "مركز حوش عيسي",
        "مركز ابو حمص",
        "مركز الدلنجات",
        "مركز كوم حماده",
        "مركز بدر",
        "مركز وادي النطرون",
        "مركز ايتاي",
        "مركز شبراخيت",
        "غرب النوباريه"
      ]

    },
    {
      "code": "23",
      "governorate_name_ar": "الفيوم",
      "cities": [
        "الفيوم",
        "الفيوم الجديده",
        "ابشواى",
        "يوسف الصديق",
        "سنورس",
        "اطسا",
        "طاميه",
      ],
      "police": [
        "الفيوم",
        "مركز الفيوم",
        "مركز اطسا",
        "مركز طاميه",
        "مركز سنورس",
        "مركز ابشواي",
        "مركز يوسف الصديق",
        "مركز الشواشنه"
      ]

    },
    {
      "code": "16",
      "governorate_name_ar": "الغربية",
      "cities": [
        "طنطا",
        "المحله الكبري",
        "كفر الزيات",
        "زفتى",
        "السنطه",
        "قطور",
        "بسيون",
        "سمنود",
      ],
      "police": [
        "طنطا اول",
        "طنطا ثاني",
        "مركز طنطا",
        "المحله الكبري اول",
        "المحله الكبري ثاني",
        "مركز المحله الكبري",
        "مركز السنطه",
        "المحله الكبري ثالث",
        "مركز بسيون",
        "مركز زفتي",
        "مركز سمنود",
        "مركز كفر الزيات",
        "مركز قطور",
        "مركز زفتي الجديد"
      ]

    },
    {
      "code": "19",
      "governorate_name_ar": "الإسماعلية",
      "cities": [
        "الاسماعيليه",
        "ابو صوير",
        "التل الكبير",
        "القصاصين الجديده",
        "القنطره غرب ",
        "القنطره شرق",
        "فايد",
      ],
      "police": [
        "الاسماعيليه اول",
        "الاسماعيليه ثاني",
        "الاسماعيليه ثالث",
        "مركز القنطره غرب",
        "مركز القنطره شرق",
        "مركز الاسماعيليه",
        "مركز فايد",
        "مركز التل الكبير",
        "مركز القصاصين الجديده",
        "مركز ابو صوير"
      ]

    },
    {
      "code": "17",
      "governorate_name_ar": "المنوفية",
      "cities": [
        " شبين الكوم",
        "قويسنا",
        "تلا",
        "الباجور",
        "اشمون",
        "منوف",
        "السادات",
        "الشهداء",
        "بركه السبع",
        "سرس الليان",
      ],
      "police": [
        "شبين الكوم",
        "منوف",
        "سرس الليان",
        "مركز شبين",
        "مركز منوف",
        "مركز اشمون",
        "مركز الباجور",
        "مركز السادات",
        "مركز الشهداء",
        "مركز بركة السبع",
        "مركز تلا",
        "مركز قويسنا"
      ]
    },
    {
      "code": "24",
      "governorate_name_ar": "المنيا",
      "cities": [
        "المنيا",
        "المنيا الجديده",
        "العدوه",
        "بنى مزار",
        "مطاي",
        "سمالوط",
        "الفكريه",
        "ملوي",
        "ديرمواس",
        "مغاغه",
      ],
      "police": [
        "المنيا اول",
        "المنيا ثان",
        "المنيا ثالث",
        "المنيا الجديده",
        "مركز المنيا",
        "مركز سمالوط غرب",
        "مركز سمالوط شرق",
        "مركز مطاي",
        "مركز مغاغه",
        "مركز العدوه",
        "مركز بني مزار",
        "مركز ابو قرقاص",
        "مركز ملوي",
        "ملوي",
        "مركز دير مواس"
      ]

    },
    {
      "code": "14",
      "governorate_name_ar": "القليوبية",
      "cities": [
        "بنها",
        "طوخ",
        "قها",
        "قليوب",
        "شبين القناطر",
        "كفر شكر",
        "القناطر الخيريه",
        "الخانكه",
        "الخصوص",
        "شبرا الخيمه",
      ],
      "police": [
        "بنها اول",
        "بنها ثان",
        "مركز بنها",
        "مركز طوخ",
        "مركز شبين القناطر",
        "مركز كفر شكر",
        "قليوب",
        "مركز قليوب",
        "مركز القناطر الخيريه",
        "الخانكه",
        "مركز الخانكه",
        "الخصوص",
        "شبرا الخيمه اول",
        "شبرا الخيمه ثاني",
        "العبور",
        "قها"
      ]

    },
    {
      "code": "32",
      "governorate_name_ar": "الوادي الجديد",
      "cities": []
    },
    {
      "code": "04",
      "governorate_name_ar": "السويس",
      "cities": [
        "السويس",
      ],
      "police": [
        "السويس",
        "فيصل",
        "عتاقه",
        "الاربعين",
        "الجناين"
      ]

    },
    {
      "code": "28",
      "governorate_name_ar": "اسوان",
      "cities": [
        "اسوان",
        "اسوان الجديده",
        "ابو سمبل السياحيه",
        "توشكى الجديده",
        "دراو",
        "ادفو",
        "السباعيه غرب",
        "الرديسيه قبلى",
        "البصيليه بحرى",
        "نصر النوبه",
        "كلابشه",
        "كوم امبو",
      ],
      "police": [
        "أسوان",
        "مركز police أسوان",
        "مركز police نصر النوبة",
        "مركز police إدفو",
        "مركز police دراو",
        "مركز police كوم أمبو",
        "مركز police أبو سمبل"
      ]
    },
    {
      "code": "25",
      "governorate_name_ar": "اسيوط",
      "cities": [
        "اسيوط",
        "اسيوط الجديده",
        "ديروط",
        "القوصيه",
        "منفلوط",
        "ابو تيج",
        "ابنوب",
        "الفتح",
        "صدفا",
        "الغنايم",
        "ساحل سليم",
        "البدارى",
      ],
      "police": [
        "اسيوط اول",
        "اسيوط ثاني",
        "مركز اسيوط",
        "مركز ديروط",
        "مركز القوصيه",
        "مركز منفلوط",
        "مركز الفتح",
        "مركز ابنوب",
        "مركز البداري",
        "مركز ساحل سليم",
        "ابو تيج",
        "مركز ابو تيج",
        "مركز صدفا",
        "مركز الغنايم"
      ]

    },
    {
      "code": "22",
      "governorate_name_ar": "بني سويف",
      "cities": [
        " بني سويف",
        "بني سويف الجديده",
        "الواسطي",
        "ناصر",
        "ببا",
        "اهناسيا",
        "سمسطا",
        "الفشن",
        "الفشن الجديده",
      ],
      "police": [
        "بني سويف",
        "بني سويف الجديده",
        "مركز بني سويف",
        "مركز الواسطي",
        "مركز ناصر",
        "مركز ببا",
        "مركز اهناسيا",
        "مركز الفشن",
        "مركز سمسطا"
      ]

    },
    {
      "code": "03",
      "governorate_name_ar": "بورسعيد",
      "cities": [
        "بورسعيد",
        "بورفؤاد",
        "سيدي غازي",
      ],
      "police": [
        "بورفؤاد اول",
        "بورفؤاد ثاني",
        "الشرق",
        "الضواحي",
        "الجنوب اول",
        "الجنوب ثاني",
        "المناخ",
        "العرب",
        "الزهور",
        "المناصره",
        "شرق التفريعه"
      ]

    },
    {
      "code": "11",
      "governorate_name_ar": "دمياط",
      "cities": [
        "دمياط",
        "عزبه البرج",
        "راس البر",
        "فارسكور",
        "الروضه",
        "الزرقا",
        "السرو",
        "كفر سعد",
        "كفر البطيخ",
        "ميت ابو غالب",
        "دمياط الجديده",
      ],
      "police": [
        "دمياط اول",
        "دمياط ثاني",
        "مركز دمياط",
        "راس البر",
        "مركز كفر سعد",
        "مركز كفر البطيخ",
        "دمياط الجديده",
        "مركز فارسكور",
        "مركز الزرقا"
      ]

    },
    {
      "code": "13",
      "governorate_name_ar": "الشرقية",
      "cities": [
        "الزقازيق",
        "العاشر من رمضان",
        "القنايات",
        "ههيا",
        "الابراهيميه",
        "ابو كبير",
        "كفر صقر",
        "أولاد صقر",
        "فاقوس",
        "الحسينيه",
        "ديرب نجم",
        "منيا القمح",
        "بلبيس",
        "الصالحيه الجديده",
        "مشتول السوق",
        "ابو حماد",
        "القرين",
      ],
      "police": [
        "الزقازيق اول",
        "الزقازيق ثاني",
        "مركز الزقازيق",
        "العاشر اول",
        "العاشر ثاني",
        "الصالحيه الجديده",
        "القرين",
        "فاقوس",
        "مركز فاقوس",
        "مركز ابو كبير",
        "مركز ابو حماد",
        "مركز الابراهيميه",
        "مركز الحسينيه",
        "مركز اولاد صقر",
        "مركز بلبيس",
        "مركز ديرب نجم",
        "مركز صان الحجر",
        "مركز كفر صقر",
        "مركز مشتول السوق",
        "مركز منيا القمح",
        "مركز ههيا",
        "مركز منشاه ابو عمر",
        "القنايات"
      ]


    },
    {
      "code": "35",
      "governorate_name_ar": "جنوب سيناء",
      "cities": []
    },
    {
      "code": "15",
      "governorate_name_ar": "كفر الشيخ",
      "cities": [
        " كفر الشيخ",
        "دسوق",
        "فوه",
        "مطوبس",
        "قلين",
        "بيلا",
        "الحامول",
        " سيدى سالم",
        "بلطيم",
        "الرياض",
        " سيدي غازي",
      ],
      "police": [
        "كفر الشيخ اول",
        "كفر الشيخ ثان",
        "مركز كفر الشيخ",
        "دسوق",
        "مركز دسوق",
        "مركز قلين",
        "مركز سيدي سالم",
        "مركز الحامول",
        "مركز البرلس",
        "بيلا",
        "مركز بيلا",
        "مركز الرياض",
        "مركز فوه",
        "مركز مطوبس",
        "مركز بلطيم"
      ]

    },
    {
      "code": "33",
      "governorate_name_ar": "مرسي مطروح",
      "cities": [
        " مرسى مطروح",
        "السلوم",
        "الحمام",
        "الضبعه",
        "سيوه",
        "سيدى برانى",
        "النجيله",
        "العلمين",
      ],
      "police": [
        "مطروح",
        "النجيله",
        "سيدي براني",
        "السلوم",
        "الحمام",
        "الضبعه",
        "العلمين",
        "مارينا",
        "سيوه"
      ]

    },
    {
      "code": "29",
      "governorate_name_ar": "الأقصر",
      "cities": [
        "الاقصر",
        " الاقصر الجديده",
        " طيبة الجديده",
        "الزينيه",
        "البياضيه",
        "القرنه",
        "أرمنت",
        "الطود",
        "اسنا",
      ],
      "police": [
        "الأقصر",
        "مركز police الأقصر",
        "مركز police طيبة",
        "مركز police القرنة",
        "مركز police أرمنت",
        "مركز police أسنا"
      ]

    },
    {
      "code": "27",
      "governorate_name_ar": "قنا",
      "cities": [
        "قنا",
        "قنا الجديده",
        "أبو تشت",
        "فرشوط",
        "نجع حمادي",
        "الوقف",
        "دشنا",
        "قفط",
        "قوص",
        "نقاده",
      ],
      "police": [
        "قنا",
        "مركز police قنا",
        "مركز قوص",
        "مركز قفط",
        "مركز نقادة",
        "مركز نجع حمادي",
        "مركز فرشوط",
        "مركز أبو تشت",
        "مركز دشنا",
        "مركز الوقف"
      ]
    },
    {
      "code": "34",
      "governorate_name_ar": "شمال سيناء",
      "cities": []
    },
    {
      "code": "26",
      "governorate_name_ar": "سوهاج",
      "cities": [
        "سوهاج",
        "الكوثر",
        "سوهاج الجديده",
        "المراغه",
        "طهطا",
        "طما",
        "البلينا",
        "جرجا",
        "المنشاه",
        "اخميم",
        "اخميم الجديده",
        "ساقلته",
        "دار السلام",
        "جهينه",
      ],
      "police": [
        "سوهاج اول",
        "سوهاج ثاني",
        "مركز سوهاج",
        "الكوثر",
        "مركز اخميم",
        "مركز ساقلته",
        "مركز المراغه",
        "مركز جهينه",
        "طهطا",
        "مركز طهطا",
        "مركز طما",
        "جرجا",
        "مركز جرجا",
        "مركز المنشاه",
        "مركز العسيرات",
        "مركز البلينا",
        "مركز دار السلام"
      ]
    },
    {
      "code": "88",
      "governorate_name_ar": "الخارجة",
      "cities": []
    }
  ]

  const [selectedGovernorate, setSelectedGovernorate] = useState(null);
  const handleSelectedGovernorate = (e) => {
    console.log(e);
    const selectedGovernorateCode = e;
    const selectedGovernorate = governoratesData.find(g => g.code === selectedGovernorateCode)
    setSelectedGovernorate(selectedGovernorate);
    console.log(selectedGovernorate);
  }

  const [members] = useState(
    JSON.parse(localStorage.getItem('members')) || []
  );

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const [toggled, setToggled] = useState()

  return (
    <div>
      <div className="bgcolor" >

        <NAvbar />
        <Box height={70} />
        <Box anchor='right' sx={{ display: "flex" }}>

          <Sidenav />

          <Box className='Box-style' component="main">

            <div className='d-flex borderr'>
              <button
                className='tab1'
                onClick={() => setToggled(2)}
              > بيانات اساسيه</button>
              <button
                onClick={() => setToggled(1)}
                className='tab2'
              > بيانات حزبيه</button>

              <button className='btn back btn-block '>

                <Link className='link-edit' to="/about">
                  رجوع
                </Link>
              </button>

            </div>




            {toggled === 1 ? (
              <form className='form-edit' >
                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        width: "100%",
                        height: "49%"
                      }}
                    > الصفه الحزبيه</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >نوع العضويه</label>
                    <select style={{
                      
                      width: "100%",
                      height: "48%",
                      marginTop:"8px"
                    }} >
                      <optgroup >
                        <option>
                          منتسب
                        </option>
                        <option>
                          مستقيل
                        </option>
                        <option>
                          عامل
                        </option>
                        <option>
                          مؤسس
                        </option>
                        <option>
                          مجمد لعدم سداد
                        </option>
                        <option>
                          مجمد للسفر
                        </option>


                      </optgroup>
                    </select >

                  </div>
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > عضو لجنه عامله/حزبيه</label>
                    <select style={{
                      
                      width: "100%",
                      height: "48%",
                      marginTop:"8px"
                    }}>
                      <optgroup>

                        <option>
                          عضو مجلس النواب
                        </option>
                        <option>
                          عضو هيئه عليا
                        </option>
                        <option>
                          عضو مجلس الشيوخ
                        </option>



                      </optgroup>
                    </select>

                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        width: "100%",
                        height: "49%"
                      }}
                    > منظمه مهنيه </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >قسم الشرطه التابع  </label>
                    <select style={{
                      
                      width: "100%",
                      height: "48%",
                      marginTop:"8px"
                    }} >
                      <optgroup >
                        <option>
                        المحله الكبري اول
                        </option>
                        <option>
                        مركز اسنا
                        </option>
                        <option>
                        المنتزه اول
                        </option>
                        <option>
                        مركز ابنوب
                        </option>
                        <option>
                        مينا البصل
                        </option>
                        <option>
                        مركز ساحل سليم
                        </option>
                        <option>
                        اسيوط ثاني
                        </option>
                        <option>
                        مركز اطسا
                        </option>
                        <option>
                        مركز البلينا
                        </option>
                        <option>
                        الظاهر
                        </option>
                        <option>
                        النزهه
                        </option>
                        <option>
                        مركز كفر الزيات
                        </option>
                        <option>
                        مدينه نصر اول 
                        </option>


                      </optgroup>
                    </select >

                  </div>

                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >دائرة انتخابيه فردي </label>
                    <select style={{
                      
                      width: "100%",
                      height: "48%",
                      marginTop:"8px"
                    }} >
                      <optgroup >
                        <option>
                        دائرة انتخابيه فردي
                        </option>
                       

                      </optgroup>
                    </select >

                  </div>
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >دائرة انتخابيه قائمه </label>
                    <select style={{
                      
                      width: "100%",
                      height: "48%",
                      marginTop:"8px"
                    }} >
                      <optgroup >
                        <option>
                        دائرة انتخابيه قائمه
                        </option>
                       

                      </optgroup>
                    </select >

                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >المؤهل الدرسي</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >التخصص</label>
                    <input type="text" class="form-control" id="inputCity" />

                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >مؤهل اضافي</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > الدراسات العليا</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >التخصص2</label>
                    <input type="text" class="form-control" id="inputCity" />

                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >سنة</label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >  دراسات 1</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >دراسات 2</label>
                    <input type="text" class="form-control" id="inputCity" />

                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >اعلى درجه</label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > الوظيفه الحاليه </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >وظيفه اخرى</label>
                    <input type="text" class="form-control" id="inputCity" />

                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >  جهة العمل الرئيس </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > عنوان العمل</label>
                    <input type="text" class="form-control" id="inputCity" />

                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > عنوان الاقامه وفقا لبطاقة الرقم القومي</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > عنوان الاقامه العفلي تفصيليا</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className='form-row mb-3 form-check-ex'>

                  <label
                    className='d-flex'
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > عنوان المراسلات:</label>

                  <div className='col-md-3 form-group'>
                    <div>
                      <label class="form-check-label"

                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        محل الاقامة
                      </label>
                      <input class="form-check-input" type="radio" name='عنوان المراسلات' value='محل الاقامة' id="gridCheck" />
                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        محل العمل
                      </label>
                      <input class="form-check-input" type="radio" name='عنوان المراسلات' value='محل العمل' id="gridCheck" />
                    </div>
                  </div>
                </div>
                  <div class="form-group col-md-5">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > الزوج ( قرابه )</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                <div className='form-row mb-3'>
                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الموبايل</label>
                    <input type="text" class="form-control" id="inputAddress2" />
                  </div>
                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >موبايل اضافي</label>
                    <input type="text" class="form-control" id="inputAddress2" />
                  </div>


                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >ت.منزلي</label>
                    <input type="tel" class="form-control" id="inputAddress2" />
                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الايميل</label>
                    <input type="email" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className='form-row mb-3'>
                  <div className=' form-check-ex col-md-4'>

                    <div className='title'>
                      <h4>هل انت عضو باحد النقابات:</h4>
                    </div>
                    <div className='col-md-4 form-group'>

                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}
                        >
                          نعم
                        </label>
                        <input class="form-check-input" type="radio" name='عضوية النقابة' value='نعم' id="gridCheck" />
                      </div>
                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}>
                          لا
                        </label>
                        <input class="form-check-input" type="radio" name='عضوية النقابة' value='لا' id="gridCheck" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-5"
                    style={{
                      marginRight: "10%"
                    }}
                  >
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >اسم النقابه</label>
                    <input type="text" class="form-control" id="inputPassword4" />
                  </div>

                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > فرع النقابة التابع له محافظة</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >تريخ الانضمام</label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>

                </div>


                <div className='form-row mb-3'>
                  <div className=' form-check-ex col-md-5'>

                    <div className='title'>
                      <h4>هل كنت عضوا فً حزب من قبل؟ :</h4>
                    </div>
                    <div className='col-md-4 form-group'>

                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}
                        >
                          نعم
                        </label>
                        <input class="form-check-input" type="radio" name='عضوية النقابة' value='نعم' id="gridCheck" />
                      </div>
                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}>
                          لا
                        </label>
                        <input class="form-check-input" type="radio" name='عضوية النقابة' value='لا' id="gridCheck" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-md-3"
                    style={{
                      marginRight: "2%"
                    }}
                  >
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >اسم الحزب</label>
                    <input type="text" class="form-control" id="inputPassword4" />
                  </div>
                  <div class="form-group col-md-3"
                    style={{
                      // marginRight:"10%"
                    }}
                  >
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > تاريخ الاستقاله</label>
                    <input type="date" class="form-control" id="inputPassword4" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > سبب الاستقاله</label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className='form-row mb-3 form-check-ex'>
                  <div className='title col-md-4'>
                    <h4>هل سبق لك الترشح في انتخابات سابقه:</h4>
                  </div>
                  <div className='col-md-4 form-group'>

                    <div>
                      <label class="form-check-label"

                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        نعم
                      </label>
                      <input class="form-check-input" type="radio" name='الترشح في الإنتخابات' value='نعم' id="gridCheck" />
                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        لا
                      </label>
                      <input class="form-check-input" type="radio" name='الترشح في الإنتخابات' value='لا' id="gridCheck" />
                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > تاريخ الترشح </label>
                    <input type="date" class="form-control" id="inputCity" />
                  </div>
                </div>


                <div className='form-row mb-3 form-check-ex'>
                  <div className='title col-md-4'>
                    <h4> هل درست برنامج الحزب:</h4>
                  </div>
                  <div className='col-md-4 form-group'>

                    <div>
                      <label class="form-check-label"

                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        نعم
                      </label>
                      <input class="form-check-input" type="radio" name='دراسة برنامج الحزب' value='نعم' id="gridCheck" />
                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        لا
                      </label>
                      <input class="form-check-input" type="radio" name='دراسة برنامج الحزب' value='لا' id="gridCheck" />
                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >ما سبب طلبك اإلنضمام لحزب العدل</label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className='form-row mb-3 form-check-ex'>

                  <label
                    className='d-flex '
                    style={{
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  > ما المجال التخصصى الذي ٌمكنك فٌه مساعدة الحزب ؟ :</label>

                  <div className='col-md-10 form-group-edit'>
                    <div>
                      <label class="form-check-label"

                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}
                      >
                        الشباب
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة الشباب' id="gridCheck" />
                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        المرأه
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة المرأه' id="gridCheck" />

                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        الاعلام
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة الاعلام' id="gridCheck" />

                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        التثقيف
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة التثقيف' id="gridCheck" />

                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        التنظيم
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة التنظيم' id="gridCheck" />

                    </div>
                    <div>
                      <label class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600"
                        }}>
                        اللجان الفنيه
                      </label>
                      <input class="form-check-input" type="radio" name='المجال التخصصي' value='مساعدة اللجان الفنية' id="gridCheck" />

                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >ما هي وسيلة التواصل المناسبة لك</label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > ملاحظات للعضويه </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-6">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >ملاحظات عامه </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >

                  <button type="submit" className='save'>حفظ</button>
                </div>

              </form>
            ) : (
              <form className='form-edit'>
                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label for="membershipNumber" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >رقم العضوية</label>
                    <input type="text" class="form-control" id="membershipNumber" name="membershipNumber" />
                  </div>

                  <div class="form-group col-md-6">
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >كود العضوية</label>
                    <input type="text" class="form-control" id="membershipCode" name="membershipCode" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-8">
                    <label for="memberName" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >اسم العضو</label>
                    <input type="text" class="form-control" id="memberName" name="memberName" />
                  </div>

                  <div class="form-group col-md-4">
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الشهرة</label>
                    <input type="text" class="form-control" id="fame" name="fame" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-5">
                    <label className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الرقم القومي</label>
                    <input type="text" class="form-control" id="nationalId" name="nationalId" />
                  </div>
                  <div class="form-group col-md-4">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >جهة الاصدار</label>
                    <input type="text" class="form-control" id="issuingAuthority" name="issuingAuthority" />
                  </div>
                  <div class="form-group col-md-3">
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    > السن </label>
                    <input type="text" class="form-control" id="age" name="age" />
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="form-group col-md-4">
                    <label for="birthdate" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >تاريخ الميلاد</label>
                    <input type="date" class="form-control" id="birthdate" name="birthdate" />
                  </div>

                  <div class="form-group col-md-2">
                    <label for="maritalStatus" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الحالة الاجتماعية</label>
                    <input type="text" class="form-control" id="maritalStatus" name="maritalStatus" />
                  </div>

                  <div class="form-group col-md-2">
                    <label for="religion" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >الديانة</label>
                    <input type="text" class="form-control" id="religion" name="religion" />
                  </div>

                  <div className='form-check col-md-4'>
                    <label
                      className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        marginLeft: "20%",
                      }}
                    > النوع : </label>
                    <div className='col-md-4 form-group'>
                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}
                        >
                          ذكر
                        </label>
                        <input class="form-check-input" type="radio" name='gender' value='ذكر' id="male" />
                      </div>
                      <div>
                        <label class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600"
                          }}>
                          انثى
                        </label>
                        <input class="form-check-input" type="radio" name='gender' value='أنثى' id="female" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='form-row mb-3 form-optgroup'>
                  <div class="form-group col-md-2">
                    <label for="governorate" className='d-flex'
                      style={{
                        fontSize: "20px",
                        fontWeight: "600"
                      }}
                    >محافظة</label>
                    <select onChange={(e) => handleSelectedGovernorate(e.target.value)} id="governorate" name="governorate">
                      <optgroup label='المحافظة'>
                        {
                          governoratesData.map((governorate, index) => (
                            <option value={governorate.code} key={index}>
                              {governorate.governorate_name_ar}
                            </option>
                          ))
                        }
                      </optgroup>
                    </select>
                  </div>

                  <div class="form-group form-row col-md-6">
                    {selectedGovernorate && (
                      <>
                        <div className='form-group col-md-6'>
                          <div>
                            <label
                              className='d-flex'
                              style={{
                                fontSize: "20px",
                                fontWeight: "600"
                              }}
                            >مدينة</label>
                            <div className='form-field'>
                              <select id="city" name="city">
                                <optgroup label='مدينة'>
                                  {
                                    selectedGovernorate.cities.map((city, index) => (
                                      <option key={index}>
                                        {city}
                                      </option>
                                    ))
                                  }
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label
                              className='d-flex'
                              style={{
                                fontSize: "20px",
                                fontWeight: "600"
                              }}
                            >مركز</label>
                            <div className='form-field'>
                              <select id="policeStation" name="policeStation">
                                <optgroup label='مركز / شرطة'>
                                  {
                                    selectedGovernorate.police.map((police, index) => (
                                      <option key={index}>
                                        {police}
                                      </option>
                                    ))
                                  }
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <div>
                            <label
                              className='d-flex'
                              style={{
                                fontSize: "20px",
                                fontWeight: "600"
                              }}
                            >حي</label>
                            <div className='form-field'>
                              <select id="district" name="district">
                                <optgroup label='حي'>
                                  <option value="test">حي</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label
                              className='d-flex'
                              style={{
                                fontSize: "20px",
                                fontWeight: "600"
                              }}
                            >شياخة</label>
                            <div className='form-field'>
                              <select id="districtPolice" name="districtPolice">
                                <optgroup label='شياخة'>
                                  <option value="test">شياخة</option>
                                </optgroup>
                              </select>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>


                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >

                  <button name='save' type="submit" className='save'>حفظ</button>
                </div>

              </form>
            )

            }

          </Box>
        </Box>
      </div>
    </div>
  )
}
