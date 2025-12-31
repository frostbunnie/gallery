import type { SiteContent, Artwork } from './types';

// =====================================================================
// 【用户指南 / USER GUIDE】
//
// 1. 设置 LOGO:
//    这里 LOGO_URL 留空 ("")，网站会自动使用文字 "yǒu gallery" 作为 Logo。
//    We leave LOGO_URL empty to force text rendering for better compatibility.
//
// 2. 修改图片 (Images):
//    找到 'imageUrl' 字段，替换引号内的链接。
//
// =====================================================================

// 【全局设置】网站名称 / Brand Name
// 注意：拼音 ǒ 会由系统字体自动渲染，确保正确显示
const BRAND_NAME = "yǒu gallery"; 

// 【全局设置】Logo 图片路径 (留空以使用纯文字 Logo)
const LOGO_URL = "";

// 【作品数据】在展览详情页展示的作品
const ARTWORKS_DATA: Artwork[] = [
  {
    id: "w1",
    title: "Untitled (Infinite Net)", // 作品标题
    year: "2023",
    medium: "Acrylic on canvas", // 材质
    dimensions: "194 x 194 cm",  // 尺寸
    imageUrl: "https://picsum.photos/800/800?grayscale&random=10", // 图片链接
    // 排版配置 (不懂代码请勿随意修改): width控制宽度, align控制左右对齐, marginTop控制垂直错落感
    layoutConfig: { width: 'w-1/2', align: 'self-start', marginTop: 'mt-0' }
  },
  {
    id: "w2",
    title: "Accumulation No. 1",
    year: "2022",
    medium: "Soft sculpture",
    dimensions: "Variable",
    imageUrl: "https://picsum.photos/600/900?grayscale&random=11",
    layoutConfig: { width: 'w-1/3', align: 'self-end', marginTop: '-mt-24' }
  },
  {
    id: "w3",
    title: "Self-Obliteration",
    year: "2023",
    medium: "Mixed media installation",
    dimensions: "300 x 300 cm",
    imageUrl: "https://picsum.photos/1200/800?grayscale&random=12",
    layoutConfig: { width: 'w-2/3', align: 'self-center', marginTop: 'mt-24' }
  },
  {
    id: "w4",
    title: "Pumpkin (Silver)",
    year: "2023",
    medium: "Bronze",
    dimensions: "120 cm",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=13",
    layoutConfig: { width: 'w-1/3', align: 'self-start', marginTop: 'mt-12' }
  },
  {
    id: "w5",
    title: "Dots Obsession",
    year: "2021",
    medium: "Acrylic on canvas",
    dimensions: "162 x 130 cm",
    imageUrl: "https://picsum.photos/700/900?grayscale&random=14",
    layoutConfig: { width: 'w-1/2', align: 'self-end', marginTop: '-mt-12' }
  },
  {
    id: "w6",
    title: "Infinity Mirror",
    year: "2023",
    medium: "Mirror, LED",
    dimensions: "200 x 100 cm",
    imageUrl: "https://picsum.photos/900/700?grayscale&random=15",
    layoutConfig: { width: 'w-2/3', align: 'self-center', marginTop: 'mt-32' }
  }
];

// 【艺术家数据】在艺术家列表页展示
const ARTISTS_DATA = [
  {
    id: "a1",
    name: "Yayoi Kusama", // 艺术家名字
    oneLiner: "The Princess of Polka Dots", // 一句话介绍（鼠标移上去前显示）
    bio: "Yayoi Kusama is a Japanese contemporary artist who works primarily in sculpture and installation, but is also active in painting, performance, film, fashion, poetry, fiction, and other arts.", // 详细介绍（鼠标移上去后显示）
    imageUrl: "https://picsum.photos/600/600?grayscale&random=20" // 头像
  },
  {
    id: "a2",
    name: "Xu Bing",
    oneLiner: "Master of Language and Signs",
    bio: "Xu Bing is a Chinese artist who served as vice-president of the Central Academy of Fine Arts. He is known for his printmaking skills and installation art, as well as his creative artistic use of language, words, and text.",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=21"
  },
  {
    id: "a3",
    name: "Tadao Ando",
    oneLiner: "The Poet of Concrete",
    bio: "Tadao Ando is a self-taught architect whose approach to architecture and landscape was categorized by architectural historian Francesco Dal Co as 'critical regionalism'.",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=22"
  },
  {
    id: "a4",
    name: "Anselm Kiefer",
    oneLiner: "Alchemy of Matter and Memory",
    bio: "Anselm Kiefer is a German painter and sculptor. His works incorporate materials such as straw, ash, clay, lead, and shellac.",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=23"
  },
  {
    id: "a5",
    name: "Lee Ufan",
    oneLiner: "Resonance of Silence",
    bio: "Lee Ufan is a Korean minimalist painter and sculptor artist and academic, honored by the government of Japan for having 'contributed to the development of contemporary art in Japan'.",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=24"
  },
  {
    id: "a6",
    name: "Richard Serra",
    oneLiner: "Weight and Balance",
    bio: "Richard Serra was an American artist known for his large-scale sculptures made for site-specific landscape, urban, and architectural settings.",
    imageUrl: "https://picsum.photos/600/600?grayscale&random=25"
  }
];

// 【艺博会数据】
const ART_FAIRS_DATA = [
  {
    id: "f1",
    title: "Art Basel Hong Kong 2024",
    location: "Hong Kong Convention and Exhibition Centre",
    date: "Mar 28 – 30, 2024",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=30"
  },
  {
    id: "f2",
    title: "Frieze Seoul 2024",
    location: "COEX, Seoul",
    date: "Sep 04 – 07, 2024",
    imageUrl: "https://picsum.photos/800/600?grayscale&random=31"
  }
];

// 【页面内容总表】分为中文(zh)和英文(en)
export const CONTENT: Record<'zh' | 'en', SiteContent> = {
  // ================= 中文内容 (Chinese) =================
  zh: {
    brandName: BRAND_NAME,
    logoUrl: LOGO_URL,
    nav: {
      exhibitions: {
        label: "展览",
        subLinks: [
          { label: "2025", action: "view-exhibitions-2025" },
          { label: "2024", action: "view-exhibitions-2024" },
          { label: "2023", action: "view-exhibitions-2023" },
          { label: "2022", action: "view-exhibitions-2022" }
        ]
      },
      artists: { label: "艺术家", action: "view-artists" },
      artFairs: { label: "艺博会", action: "view-artfairs" },
      about: { label: "关于", action: "view-about" }
    },
    hero: {
      title: "无尽的虚空", // 首页大标题
      artist: "草间弥生", // 首页大图对应的艺术家
      date: "2023.10.01 — 2024.01.15",
      description: "探索波点与无限网格之间的哲学对话，一场关于自我消融与永恒的沉浸式体验。",
      buttonText: "了解更多",
      imageUrl: "https://picsum.photos/1920/1080?grayscale" // 首页大图链接
    },
    currentExhibitionsTitle: "精选展览",
    exhibitions: [
      {
        id: "1",
        title: "静默的响声",
        artist: "徐冰",
        date: "2023.11.05 — 2023.12.20",
        year: 2023,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=1"
      },
      {
        id: "2",
        title: "光的建筑",
        artist: "安藤忠雄",
        date: "2024.01.10 — 2024.03.30",
        year: 2024,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=2"
      },
      {
        id: "3",
        title: "混沌秩序",
        artist: "安塞姆·基弗",
        date: "2024.02.15 — 2024.05.01",
        year: 2024,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=3"
      },
      {
        id: "4",
        title: "黑白变奏",
        artist: "赵无极",
        date: "2022.03.01 — 2022.04.15",
        year: 2022,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=4"
      },
      {
        id: "5",
        title: "材料的诗意",
        artist: "李禹焕",
        date: "2025.04.20 — 2025.06.30",
        year: 2025,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=5"
      },
      {
        id: "6",
        title: "空间构想",
        artist: "理查德·塞拉",
        date: "2022.05.10 — 2022.07.20",
        year: 2022,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=6"
      },
      {
        id: "7",
        title: "时间的痕迹",
        artist: "蔡国强",
        date: "2025.01.15 — 2025.03.30",
        year: 2025,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=7"
      },
      {
        id: "8",
        title: "虚空之境",
        artist: "草间弥生",
        date: "2023.06.01 — 2023.08.30",
        year: 2023,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=8"
      }
    ],
    artists: ARTISTS_DATA,
    artFairs: ART_FAIRS_DATA,
    about: {
      title: "关于画廊",
      paragraphs: [
        "yǒu gallery 成立于2023年，坐落于城市中心的艺术街区。作为一个致力于当代艺术推广的实验性空间，我们试图打破传统白立方的局限，探索艺术与空间、观众与作品之间更深层的对话。",
        "画廊关注具有独特语言和哲学思考的艺术家，无论是成名已久的大师还是初露锋芒的新锐。我们相信艺术是跨越语言和文化的媒介，能够在喧嚣的都市生活中开辟出一片精神的净土。",
        "我们定期举办讲座、放映和跨界合作项目，致力于构建一个开放、多元且具有启发性的艺术社区，为收藏家、艺术家 and 艺术爱好者提供一个交流的平台。"
      ],
      contactInfo: {
        addressLabel: "地址",
        address: "北京市朝阳区酒仙桥路4号798艺术区",
        hoursLabel: "开放时间",
        hours: "周二至周日, 11:00 - 18:00 (周一闭馆)",
        contactLabel: "联系",
        phone: "+86 10 1234 5678",
        email: "info@yougallery.com"
      },
      mapImageUrl: "https://picsum.photos/1200/800?grayscale&blur=2"
    },
    exhibitionDetail: {
      title: "无尽的虚空",
      artist: "草间弥生",
      date: "2023.10.01 — 2024.01.15",
      backText: "返回主页",
      curatorialStatement: [
        "本次展览‘无尽的虚空’深入探讨了艺术家草间弥生对于‘自我消融’这一概念的终身痴迷。通过重复的圆点与无限的网，草间试图在无垠的宇宙中寻找个体的定位。",
        "展览精选了艺术家近五年的代表作，包括大型装置、布面油画以及软雕塑作品。观众将被邀请进入一个没有起点也没有终点的空间，在这里，视觉的边界被打破，物理空间与心理空间相互交织。",
        "‘我的生命也是其中一个圆点。’草间弥生如是说。在这个展览中，我们也成为了这浩瀚宇宙中微小却不可或缺的一部分。"
      ],
      artworks: ARTWORKS_DATA
    },
    footer: {
      contact: "联系我们: info@yougallery.com | +86 10 1234 5678",
      copyright: "© 2024 yǒu gallery. 版权所有."
    }
  },

  // ================= 英文内容 (English) =================
  en: {
    brandName: BRAND_NAME,
    logoUrl: LOGO_URL,
    nav: {
      exhibitions: {
        label: "EXHIBITIONS",
        subLinks: [
          { label: "2025", action: "view-exhibitions-2025" },
          { label: "2024", action: "view-exhibitions-2024" },
          { label: "2023", action: "view-exhibitions-2023" },
          { label: "2022", action: "view-exhibitions-2022" }
        ]
      },
      artists: { label: "ARTISTS", action: "view-artists" },
      artFairs: { label: "ART FAIRS", action: "view-artfairs" },
      about: { label: "ABOUT", action: "view-about" }
    },
    hero: {
      title: "THE ENDLESS VOID",
      artist: "YAYOI KUSAMA",
      date: "OCT 01, 2023 — JAN 15, 2024",
      description: "Exploring the philosophical dialogue between polka dots and infinite nets—an immersive experience of self-obliteration and eternity.",
      buttonText: "VIEW EXHIBITION",
      imageUrl: "https://picsum.photos/1920/1080?grayscale"
    },
    currentExhibitionsTitle: "SELECTED EXHIBITIONS",
    exhibitions: [
      {
        id: "1",
        title: "SILENT NOISE",
        artist: "XU BING",
        date: "NOV 05, 2023 — DEC 20, 2023",
        year: 2023,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=1"
      },
      {
        id: "2",
        title: "ARCHITECTURE OF LIGHT",
        artist: "TADAO ANDO",
        date: "JAN 10, 2024 — MAR 30, 2024",
        year: 2024,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=2"
      },
      {
        id: "3",
        title: "CHAOTIC ORDER",
        artist: "ANSELM KIEFER",
        date: "FEB 15, 2024 — MAY 01, 2024",
        year: 2024,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=3"
      },
      {
        id: "4",
        title: "VARIATIONS IN B&W",
        artist: "ZAO WOU-KI",
        date: "MAR 01, 2022 — APR 15, 2022",
        year: 2022,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=4"
      },
      {
        id: "5",
        title: "POETRY OF MATERIALS",
        artist: "LEE UFAN",
        date: "APR 20, 2025 — JUN 30, 2025",
        year: 2025,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=5"
      },
      {
        id: "6",
        title: "SPATIAL CONCEPTS",
        artist: "RICHARD SERRA",
        date: "MAY 10, 2022 — JUL 20, 2022",
        year: 2022,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=6"
      },
      {
        id: "7",
        title: "TRACES OF TIME",
        artist: "CAI GUO-QIANG",
        date: "JAN 15, 2025 — MAR 30, 2025",
        year: 2025,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=7"
      },
      {
        id: "8",
        title: "REALM OF VOID",
        artist: "YAYOI KUSAMA",
        date: "JUN 01, 2023 — AUG 30, 2023",
        year: 2023,
        imageUrl: "https://picsum.photos/600/800?grayscale&random=8"
      }
    ],
    artists: ARTISTS_DATA,
    artFairs: ART_FAIRS_DATA,
    about: {
      title: "ABOUT US",
      paragraphs: [
        "Founded in 2023, yǒu gallery is located in the city's central art district. As an experimental space dedicated to the promotion of contemporary art, we attempt to break the limitations of the traditional white cube and explore deeper dialogues between art and space, viewers and works.",
        "The gallery focuses on artists with unique languages and philosophical thinking, whether they are long-established masters or emerging talents. We believe art is a medium that transcends language and culture, capable of carving out a pure spiritual land in the hustle and bustle of urban life.",
        "We regularly host lectures, screenings, and cross-disciplinary projects, committed to building an open, diverse, and inspiring art community for collectors, artists, and art lovers alike."
      ],
      contactInfo: {
        addressLabel: "ADDRESS",
        address: "4 Jiuxianqiao Rd, 798 Art Zone, Chaoyang, Beijing",
        hoursLabel: "OPENING HOURS",
        hours: "Tue - Sun, 11:00 - 18:00 (Closed on Mon)",
        contactLabel: "CONTACT",
        phone: "+86 10 1234 5678",
        email: "info@yougallery.com"
      },
      mapImageUrl: "https://picsum.photos/1200/800?grayscale&blur=2"
    },
    exhibitionDetail: {
      title: "THE ENDLESS VOID",
      artist: "YAYOI KUSAMA",
      date: "OCT 01, 2023 — JAN 15, 2024",
      backText: "BACK TO HOME",
      curatorialStatement: [
        "The exhibition 'The Endless Void' delves into Yayoi Kusama's lifelong obsession with the concept of 'self-obliteration.' Through repetitive dots and infinite nets, Kusama attempts to locate the individual within the boundless universe.",
        "Featuring a selection of the artist's works from the past five years, including large-scale installations, oil paintings, and soft sculptures, visitors are invited into a space with no beginning and no end. Here, visual boundaries are dissolved, and physical and psychological spaces intertwine.",
        "“My life is a dot lost among thousands of other dots,” says Kusama. In this exhibition, we too become a tiny yet indispensable part of this vast cosmos."
      ],
      artworks: ARTWORKS_DATA
    },
    footer: {
      contact: "CONTACT: info@yougallery.com | +86 10 1234 5678",
      copyright: "© 2024 YǑU GALLERY. ALL RIGHTS RESERVED."
    }
  }
};