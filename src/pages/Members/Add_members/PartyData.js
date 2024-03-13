import React from 'react'

export default function PartyData() {
  return (
    <div>
         <form className="form-edit">
                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        width: "100%",
                        height: "49%",
                      }}
                    >
                      {" "}
                      الصفه الحزبيه
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        marginTop: "2px",
                        padding: "5px",
                      }}
                    >
                      <optgroup>
                        <option>رئيس الحزب</option>
                        <option>مساعد رئيس الحزب لذوي الهمم</option>
                        <option>امين الصندوق المركزى</option>
                      </optgroup>
                    </select>
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      نوع العضويه
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        marginTop: "8px",
                      }}
                    >
                      <optgroup>
                        <option>منتسب</option>
                        <option>مستقيل</option>
                        <option>عامل</option>
                        <option>مؤسس</option>
                        <option>مجمد لعدم سداد</option>
                        <option>مجمد للسفر</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      عضو لجنه عامله/حزبيه
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        padding: "6px",
                      }}
                    >
                      <optgroup>
                        <option>عضو مجلس النواب</option>
                        <option>عضو هيئه عليا</option>
                        <option>عضو مجلس الشيوخ</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      لجنة فرعية / حزبيه
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        width: "100%",
                        height: "49%",
                      }}
                    >
                      {" "}
                      منظمه مهنيه{" "}
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>


                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      دائرة انتخابيه فردي{" "}
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        marginTop: "8px",
                      }}
                    >
                      <optgroup>
                        <option>دائرة انتخابيه فردي</option>
                      </optgroup>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      دائرة انتخابيه قائمه{" "}
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "48%",
                        marginTop: "8px",
                      }}
                    >
                      <optgroup>
                        <option>دائرة انتخابيه قائمه</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      المؤهل الدرسي
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      التخصص
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      مؤهل اضافي
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      الدراسات العليا
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      التخصص2
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      سنة
                    </label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      دراسات 1
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      دراسات 2
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-2">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      اعلى درجه
                    </label>
                    <input type="text" class="form-control" id="inputZip" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      الوظيفه الحاليه{" "}
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      وظيفه اخرى
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      جهة العمل الرئيس{" "}
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      عنوان العمل
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      عنوان الاقامه وفقا لبطاقة الرقم القومي
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      عنوان الاقامه العفلي تفصيليا
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className="form-row mb-3 form-check-ex">
                  <label
                    className="d-flex"
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    عنوان المراسلات:
                  </label>

                  <div className="col-md-3 form-group">
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        محل الاقامة
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="عنوان المراسلات"
                        value="محل الاقامة"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        محل العمل
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="عنوان المراسلات"
                        value="محل العمل"
                        id="gridCheck"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      الزوج ( قرابه )
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-4" style={{}}>
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      تاريخ  العضوية{" "}
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="form-group col-md-4" style={{}}>
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      تاريخ انتهاء البطاقه{" "}
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      الموبايل
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      موبايل اضافي
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress2"
                    />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ت.منزلي
                    </label>
                    <input type="tel" class="form-control" id="inputAddress2" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      الايميل
                    </label>
                    <input type="email" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className=" form-check-ex col-md-5">
                    <div className="title">
                      <h4>هل انت عضو باحد النقابات:</h4>
                    </div>
                    <div className="col-md-4 form-group">
                      <div>
                        <label
                          class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600",
                          }}
                        >
                          نعم
                        </label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="عضوية النقابة"
                          value="نعم"
                          id="gridCheck"
                        />
                      </div>
                      <div>
                        <label
                          class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600",
                          }}
                        >
                          لا
                        </label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="عضوية النقابة"
                          value="لا"
                          id="gridCheck"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="form-group col-md-3"
                    style={{
                      marginRight: "2%",
                    }}
                  >
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      اسم النقابه
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div
                    class="form-group col-md-3"
                    style={{
                      marginRight: "",
                    }}
                  >
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      الوضع النقابى
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      فرع النقابة التابع له محافظة
                    </label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>

                  <div class="form-group col-md-4">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      تاريخ الانضمام
                    </label>
                    <input type="date" class="form-control" id="inputZip" />
                  </div>
                </div>

                <div className="form-row mb-3">
                  <div className=" form-check-ex col-md-6">
                    <div className="title">
                      <h4>هل كنت عضوا فً حزب من قبل؟ :</h4>
                    </div>
                    <div className="col-md-4 form-group">
                      <div>
                        <label
                          class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600",
                          }}
                        >
                          نعم
                        </label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="عضوية النقابة"
                          value="نعم"
                          id="gridCheck"
                        />
                      </div>
                      <div>
                        <label
                          class="form-check-label"
                          style={{
                            fontSize: "25px",
                            fontWeight: "600",
                          }}
                        >
                          لا
                        </label>
                        <input
                          class="form-check-input"
                          type="radio"
                          name="عضوية النقابة"
                          value="لا"
                          id="gridCheck"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="form-group col-md-6"
                    style={{
                      marginRight: "",
                    }}
                  >
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      اسم الحزب
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6" style={{}}>
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      تاريخ العضويه
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="form-group col-md-6" style={{}}>
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      تاريخ الاستقاله
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                    />
                  </div>
                </div>
                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      سبب الاستقاله
                    </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className="form-row mb-3 form-check-ex">
                  <div className="title col-md-4">
                    <h4>هل سبق لك الترشح في انتخابات سابقه:</h4>
                  </div>
                  <div className="col-md-4 form-group">
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        نعم
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="الترشح في الإنتخابات"
                        value="نعم"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        لا
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="الترشح في الإنتخابات"
                        value="لا"
                        id="gridCheck"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      تاريخ الترشح{" "}
                    </label>
                    <input type="date" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className="form-row mb-3 form-check-ex">
                  <div className="title col-md-4">
                    <h4> هل درست برنامج الحزب:</h4>
                  </div>
                  <div className="col-md-4 form-group">
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        نعم
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="دراسة برنامج الحزب"
                        value="نعم"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        لا
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="دراسة برنامج الحزب"
                        value="لا"
                        id="gridCheck"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ما سبب طلبك اإلنضمام لحزب العدل
                    </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div className="form-row mb-3 form-check-ex">
                  <label
                    className="d-flex "
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    ما المجال التخصصى الذي ٌمكنك فٌه مساعدة الحزب ؟ :
                  </label>

                  <div className="col-md-10 form-group-edit">
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        الشباب
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة الشباب"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        المرأه
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة المرأه"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        الاعلام
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة الاعلام"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        التثقيف
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة التثقيف"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        التنظيم
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة التنظيم"
                        id="gridCheck"
                      />
                    </div>
                    <div>
                      <label
                        class="form-check-label"
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                        }}
                      >
                        اللجان الفنيه
                      </label>
                      <input
                        class="form-check-input"
                        type="radio"
                        name="المجال التخصصي"
                        value="مساعدة اللجان الفنية"
                        id="gridCheck"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-12">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ما هي وسيلة التواصل المناسبة لك
                    </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div class="form-row mb-3">
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      ملاحظات للعضويه{" "}
                    </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="form-group col-md-6">
                    <label
                      className="d-flex"
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      ملاحظات عامه{" "}
                    </label>
                    <textarea type="text" class="form-control" id="inputCity" />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <button type="submit" className="save">
                    حفظ
                  </button>
                </div>
              </form>
    </div>
  )
}
