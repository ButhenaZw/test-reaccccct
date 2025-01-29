import i18n from "i18next";
import { initReactI18next } from "react-i18next";  // Ensure this is imported
import en from "./locale/en.json";  // Updated path
import ar from "./locale/ar.json";  // Updated path

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        heroTitle: "Coding Made Fun for Kids!",
        heroText: "We teach children aged 7-14 the fundamentals of coding in an engaging and playful way.",
        getStarted: "Get Started",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",
        heroTitle: "Coding Made Fun for Kids!",
        heroText: "We teach children aged 7-14 the fundamentals of coding in an engaging and playful way.",
        getStarted: "Get Started",
        schoolActivities: "School Activities",
        codingWorkshop: "Coding Workshop",
        codingWorkshopDesc: "Learn the basics of programming in a fun way.",
        programmingContest: "Programming Contest",
        programmingContestDesc: "Participate in challenges and win prizes.",
        programmingGame: "Programming Game",
        programmingGameDesc: "Learn coding through interactive games.",
        ourServices: "Our Services",
        academicPrograms: "1. Academic Programs",
        academicProgramsDesc:           "Supporting students to achieve academic excellence \n" +
        "through outstanding educational programs. \n" +
        "Providing tutoring sessions to improve student \n" +
        "performance in core subjects.",
        coCurricularActivities: "2. Co-Curricular Activities",
        coCurricularActivitiesDesc:  "Organizing various sports activities, including football, \n" +
          "basketball, and athletics. \n" +
          "Supporting artistic talents through music, art, and theater clubs. \n" +
          "Encouraging students to participate in national competitions \n" +
          "such as debates and science fairs.",
        educationalTechnology: "3. Educational Technology",
        educationalTechnologyDesc:  "Equipping classrooms with the latest technological \n" +
        "teaching tools. \n" +
        "Providing an online platform for communication between \n" +
        "students, parents, and teachers. \n" +
        "Facilitating access to digital learning resources to \n" +
        "assist students in their studies.",
        teamsPageTitle: "Our Team",
        meetOurTeam: "Meet Our Team",
        webDeveloper: "Web Developer",
        
        sabaName: "Saba Alhrishat",
        sabaBio: "AI coach specializing in Software Engineering, working with robots and passionate about training children.",
        
        shireenName: "Shireen Ramadan",
        shireenBio: "Shireen is an experienced developer with a passion for creating beautiful websites.",

        buthenaName: "Buthena Abdullah",
        buthenaBio: "Buthena is an experienced developer with a passion for creating beautiful websites.",

        tamaraName: "Tamar Mehdawi",
        tamaraBio: "Tamara is an experienced developer with a passion for creating beautiful websites.",
      }
      
    },
    ar: {
      translation: {
        heroTitle: "البرمجة أصبحت ممتعه للأطفال!",
        heroText: "نحن نعلم الأطفال الذين تتراوح أعمارهم بين 7-14 أساسيات البرمجة بطريقة ممتعة ومسلية.",
        getStarted: "ابدأ الآن",
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        signup: "اشتراك",
        heroTitle: "البرمجة أصبحت ممتعه للأطفال!",
        heroText: "نحن نعلم الأطفال الذين تتراوح أعمارهم بين 7-14 أساسيات البرمجة بطريقة ممتعة ومسلية.",
        getStarted: "ابدأ الآن",
        schoolActivities: "أنشطة المدرسة",
        codingWorkshop: "ورشة البرمجة",
        codingWorkshopDesc: "تعلم أساسيات البرمجة بطريقة ممتعة.",
        programmingContest: "مسابقة البرمجة",
        programmingContestDesc: "شارك في التحديات واربح الجوائز.",
        programmingGame: "لعبة البرمجة",
        programmingGameDesc: "تعلم البرمجة من خلال الألعاب التفاعلية.",
        ourServices: "خدماتنا",
        academicPrograms: "١. البرامج الأكاديمية",
        academicProgramsDesc: "دعم الطلاب لتحقيق التميز الأكاديمي \n" +
          "من خلال برامج تعليمية متميزة. \n" +
          "توفير جلسات دراسية لتحسين أداء الطلاب \n" +
          "في المواد الأساسية.",
        coCurricularActivities: "٢. الأنشطة اللاصفية",
        coCurricularActivitiesDesc:  "تنظيم أنشطة رياضية متنوعة، بما في ذلك كرة القدم، \n" +
        "كرة السلة، وألعاب القوى. \n" +
        "دعم المواهب الفنية من خلال نوادي الموسيقى والفنون والمسرح. \n" +
        "تشجيع الطلاب على المشاركة في المسابقات الوطنية \n" +
        "مثل المناظرات والمعارض العلمية.",
        educationalTechnology: "٣. التكنولوجيا التعليمية",
        educationalTechnologyDesc: "تجهيز الفصول الدراسية بأحدث أدوات \n" +
        "التدريس التكنولوجية. \n" +
        "توفير منصة إلكترونية للتواصل بين الطلاب، \n" +
        "أولياء الأمور، والمعلمين. \n" +
        "تسهيل الوصول إلى الموارد التعليمية الرقمية \n" +
        "لمساعدة الطلاب في دراستهم.",
        teamsPageTitle: "فريقنا",
        meetOurTeam: "تعرف على فريقنا",
        webDeveloper: "مطور ويب",
        
        sabaName: "صبا الهريشات",
        sabaBio: "مدربة ذكاء اصطناعي متخصصة في هندسة البرمجيات، تعمل مع الروبوتات وتحب تدريب الأطفال.",
        
        shireenName: "شيرين رمضان",
        shireenBio: "شيرين مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",

        buthenaName: "بثينة عبد الله",
        buthenaBio: "بتينة مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",

        tamaraName: " تمارا مهداوي",
        tamaraBio: "تمارا مطورة ذات خبرة ولديها شغف بإنشاء مواقع ويب جميلة.",
      
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
