const eventBus = new Vue();
Vue.component("nav-tag", {
  template: `<div id="nav" class="container">
              <div class="wrapper">
                <div class="menu">
                  <div class="title">
                    <p>{{classification[0].name}}</p>
                  </div>
                  <div class="items">
                    <a href="javascript:;" v-for="item in classification[0].items" @click="setView(item.link)">{{item.name}}</a>
                  </div>
                </div>
                <div class="contact">
                  <div class="title">
                    <p>{{classification[1].name}}</p>
                  </div>
                  <div class="items">
                    <div class="item" v-for="(subclass,idx) in classification[1].subclass">
                      <h4>{{subclass.name}}</h4>
                      <a href="javascript:;" v-for="info in subclass.infos">{{info}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      classification: [
        {
          name: "Menu",
          items: [
            { name: "Case Studies", link: "case-studies-page" },
            { name: "Approach", link: "approach-page" },
            { name: "Services", link: "services-page" },
            { name: "About us", link: "about-us-page" },
          ],
        },
        {
          name: "Contact",
          subclass: [
            {
              name: "Email",
              infos: ["Get in touch with us", "Get a free audit"],
            },
            {
              name: "Headuarter",
              infos: ["Taipei Neihu,Taiwan"],
            },
            {
              name: "Phone",
              infos: ["+886(02) 2799 88888"],
            },
            {
              name: "Legal",
              infos: ["Privacy & Cookies"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    setView(page) {
      eventBus.$emit("changePage", page);
    },
  },
});
Vue.component("header-tag", {
  template: `<div id="header" class="container">
              <div class="wrapper">
                <div class="logo">
                  <a href="javascript:;" @click="setViewCaseStudies">{{logo.name}}</a>
                  <marquee :class="{'fade':logo.isFade}">{{logo.statement}}</marquee>
                </div>
                <div class="nav-toggle">
                  <div class="hamburger" @click="open()">
                    <span v-for="num in spanNumber"></span>
                  </div>
                  <div class="hamburger-close" @click="close()">
                    <svg>
                      <g id="group_1"  transform="translate(-152 -439)">
                        <line id="line_1" y1="14.91" transform="translate(184 463.788)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <path id="path_1" d="M6,9.155,10.949,5" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <path id="path_2" d="M10.949,5,15.9,9.155" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <g id="ellipse_1" transform="translate(152 439)" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2.5">
                          <circle cx="32" cy="32" r="32" stroke="none"/>
                          <circle id="circle" cx="32" cy="32" r="30.75" fill="none"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      spanNumber: 2,
      logo: {
        name: "JACKO.",
        statement: " 個人練習作品    非商業用途 ",
        isFade: false,
      },
    };
  },
  methods: {
    open() {
      gsap
        .timeline()
        .to("#nav", {
          duration: 0.3,
          css: {
            display: "block",
            visibility: "visible",
            opacity: 1,
          },
          ease: "power4.out",
        })
        .to(
          [
            "#banner,#cases,#approach-banner,#services-banner,#about-us-banner,#approach-services-link,#approach-next-page,#services-next-page",
          ],
          {
            duration: 0.6,
            y: "50vh",
            ease: "power1.out",
          },
          "-.2"
        )
        .to(".hamburger span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#line_1", {
          duration: 0.5,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
          ease: "expo.inOut",
        })
        .to(".hamburger-close", {
          duration: 1,
          delay: -0.8,
          css: {
            display: "block",
            "z-index": 100,
            opacity: 1,
            visibility: "visible",
          },
        });
    },
    close() {
      gsap
        .timeline()
        .to("#nav", {
          duration: 0.5,
          css: {
            display: "none",
            visibility: "hidden",
            opacity: 0,
          },
          ease: "power4.out",
        })
        .to(
          [
            "#banner,#cases,#approach-banner,#services-banner,#about-us-banner,#approach-services-link,#approach-next-page,#services-next-page",
          ],
          {
            duration: 1,
            y: 0,
            ease: "power4.out",
          },
          "-=.5"
        )
        .to(
          "#circle",
          {
            duration: 0.6,
            delay: -0.6,
            css: {
              strokeDashoffset: -193,
              strokeDasharray: 227,
            },
          },
          "-=.4"
        )
        .to(
          "#path_1",
          {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          },
          "-=.4"
        )
        .to(
          "#path_2",
          {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          },
          "-=.4"
        )
        .to(
          "#line_1",
          {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 40,
              strokeDasharray: 40,
            },
          },
          "-=.4"
        )
        .to(".hamburger span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(
          ".hamburger-close",
          {
            duration: 0.3,
            delay: -0.2,
            css: { display: "none" },
          },
          "-=.2"
        );
    },
    setViewCaseStudies() {
      eventBus.$emit("changePage", "case-studies-page");
    },
  },
  mounted() {
    let time;
    if (window.innerWidth >= 1024) {
      time = 15000;
    } else if (window.innerWidth >= 768) {
      time = 10000;
    } else {
      time = 8000;
    }
    setTimeout(() => {
      this.logo.isFade = true;
    }, time);
  },
});
Vue.component("case-studies-page", {
  template: `<div id="case-studies-page">
              <div id="overlay" class="container">
                <div class="top">
                  <div class="overlay-top" v-for="num in overlayTopNumber"></div>
                </div>
                <div class="bottom">
                  <div class="overlay-bottom" v-for="num in overlayBottomNumber"></div>
                </div>
              </div>
              <div id="banner" class="container">
                <div class="wrapper">
                  <div class="line" v-for="(content,idx) in contents" :key="content.text">
                    <span>{{content.text}}</span>
                  </div>
                  <div class="more">
                    <a href="javascript:;" @click="setViewAboutUs">{{button.text}}
                      <svg :viewBox="button.icon.viewBox">
                        <path :d="button.icon.d"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div id="cases" class="container">
                <div class="cases-navigation">
                  <div class="cases-arrow pre disabled">
                    <svg :viewBox="navigation.pre.viewBox">
                      <path :d="navigation.pre.d"/>
                    </svg>
                  </div>
                  <div class="cases-arrow next">
                    <svg :viewBox="navigation.next.viewBox">
                      <path :d="navigation.next.d"/>
                    </svg>
                    </div>
                  </div>
                  <div class="case" v-for="c in cases" :key="c.id">
                    <div class="case-detail">
                      <span>{{c.subtitle}}</span>
                      <h2>{{c.title}}</h2>
                    </div>
                    <div class="case-img">
                      <img :src="c.img" :alt="c.id">
                    </div>
                    </div>
                    <div class="canvas case-canvas1"></div>
                    <div class="canvas case-canvas2"></div>
                    <div class="canvas case-canvas3"></div>
              </div>
            </div>`,
  data() {
    return {
      overlayTopNumber: 3,
      overlayBottomNumber: 3,
      contents: [
        { text: "Creating unique" },
        { text: "brands" },
        { text: "is what we do." },
      ],
      button: {
        text: "More about us",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      navigation: {
        pre: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
        next: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      cases: [
        {
          id: 1,
          subtitle: "Curology",
          title: "A custom formula for protecting your skin",
          img: "./images/curology.png",
        },
        {
          id: 2,
          subtitle: "Yourspace",
          title: "Open space floor plans for your future",
          img: "./images/yourspace.png",
        },
        {
          id: 3,
          subtitle: "Lumin",
          title: "Capture your best look",
          img: "./images/lumin.png",
        },
      ],
    };
  },
  methods: {
    setViewAboutUs() {
      eventBus.$emit("changePage", "about-us-page");
    },
    caseStudiesOverlayAnimation() {
      gsap
        .timeline()
        .to(window, { duration: 0, scrollTo: 0 })
        .from(".line span", {
          duration: 1.8,
          autoAlpha: 0,
          y: 50,
          ease: "power4.out",
          delay: 1,
          skewY: 7,
          stagger: {
            amount: 0.3,
          },
        })
        .to(".overlay-top", {
          duration: 1.6,
          height: 0,
          ease: "expo.inOut",
          stagger: {
            amount: 0.4,
          },
        })
        .to(".overlay-bottom", {
          duration: 2,
          width: 0,
          ease: "expo.inOut",
          delay: -0.8,
          stagger: {
            amount: 0.4,
          },
        })
        .to("#overlay", {
          duration: 0,
          css: { display: "none", visibility: "hidden" },
        })
        .from(".case-img img", {
          duration: 1.6,
          scale: 1.4,
          ease: "expo.inOut",
          delay: -1.5,
          stagger: {
            amount: 0.3,
          },
        })
        .to(".case-img img", {
          duration: 2,
          css: { display: "none" },
        });
      for (let i = 0; i < this.cases.length; i++) {
        new hoverEffect({
          parent: document.querySelector(`.case-canvas${i + 1}`),
          intensity: 0.3,
          image1: this.cases[i].img,
          image2: this.cases[i].img,
          displacementImage: "./images/distortion.png",
        });
      }
    },
    windowInnerHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  mounted() {
    this.caseStudiesOverlayAnimation();
    this.windowInnerHeight();
  },
});
Vue.component("approach-page", {
  template: `<div id="approach">
              <div id="overlay1" class="container"></div>
              <div id="approach-banner">
                <h1>{{title}}</h1>
                <div class="content" v-for="content in contents">{{content.text}}</div>
                <div class="scroll">
                  <h2>{{scroll.text}}</h2>
                  <svg :viewBox="scroll.icon.viewBox">
                    <path :d="scroll.icon.d"/>
                  </svg>
                </div>
              </div>
              <div id="approach-services-link">
                <div class="wrapper">
                  <aside>
                    <div class="title">
                      <h2>{{text}}</h2>
                    </div>
                    <div class="more">
                      <a href="javascript:;" @click="setViewServices" class="ahead-button">{{button1.text}}
                        <svg :viewBox="button1.icon.viewBox">
                          <path :d="button1.icon.d"/>
                        </svg>
                      </a>
                    </div>
                  </aside>
                  <aside>
                    <div class="section" v-for="section in sections">
                      <h1>{{section.title}}</h1>
                      <p>{{section.paragraph}}</p>
                    </div>
                  </aside>
                </div>
              </div>
              <div id="approach-next-page">
                <div :class="wave.name" v-for="wave in waves">
                  <img :src="wave.path" :alt="wave.name">
                </div>
                <div class="title">
                  <h1>{{context}}</h1>
                  <div class="more">
                    <a href="javascript:;" @click="setViewServices">{{button2.text}}
                      <svg :viewBox="button2.icon.viewBox">
                        <path :d="button2.icon.d"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "Approach",
      contents: [
        { text: "We look for" },
        { text: "instinctive keys" },
        { text: "behind business" },
        { text: "challenges." },
      ],
      scroll: {
        text: "Scroll Down",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      text: "What we do?",
      button1: {
        text: "Our Services",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      button2: {
        text: "About us",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      sections: [
        {
          title: "Brand experiences",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolores expedita porro earum fugiat consequatur vero deleniti obcaecati quasi? Repudiandae quo nesciunt quis ipsam laborum fuga asperiores soluta amet nam!",
        },
        {
          title: "Exponential Growth",
          paragraph:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolores expedita porro earum fugiat consequatur vero deleniti obcaecati quasi? Repudiandae quo nesciunt quis ipsam laborum fuga asperiores soluta amet nam!",
        },
      ],
      waves: [
        { name: "wave1", path: "../images/wave1.svg" },
        { name: "wave2", path: "../images/wave2.svg" },
      ],
      context: "Next Page",
    };
  },
  methods: {
    setViewServices() {
      eventBus.$emit("changePage", "services-page");
    },
    approachOverlayAnimation() {
      gsap
        .timeline()
        .to(window, { duration: 0, scrollTo: 0 })
        .to("#overlay1", {
          duration: 1,
          opacity: 1,
          ease: "expo.inOut",
        })
        .to("#overlay1", {
          duration: 1,
          y: "100vh",
          ease: "expo.inOut",
        })
        .from(["#approach-banner h1,.content"], {
          duration: 1,
          autoAlpha: 0,
          skewY: 7,
          y: 50,
          delay: 0.5,
          ease: "power4.out",
          stagger: { amount: 0.4 },
          transformOrigin: "0 0",
        })
        .from([".scroll h2,.scroll svg"], {
          duration: 0.3,
          y: 20,
          autoAlpha: 0,
          delay: 0.3,
          ease: "power4.out",
          stagger: {
            amount: 0.2,
          },
        });
    },
    aheadServiceScrollAnimation() {
      let tl = gsap.timeline();

      tl.from([".title h2", ".more .ahead-button"], {
        autoAlpha: 0,
        x: -50,
        stagger: 0.4,
      }).from(".section", {
        autoAlpha: 0,
        y: -100,
        stagger: 0.3,
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#approach-services-link",
        start: "top 80%",
        end: "bottom 0",
        toggleActions: "play none reverse reverse",
      });
    },
    nextPageScrollAnimation() {
      let tl = gsap.timeline();

      tl.from(".wave1", {
        duration: 2,
        y: 200,
        ease: "power1.out",
      }).from(".wave2", {
        duration: 1,
        y: 300,
        ease: "power4.out",
      });

      ScrollTrigger.create({
        animation: tl,
        trigger: "#approach-next-page",
        start: "top 50%",
        scrub: true,
        toggleActions: "play none reverse reverse",
      });
    },
  },
  mounted() {
    this.approachOverlayAnimation();
    this.aheadServiceScrollAnimation();
    this.nextPageScrollAnimation();
  },
});
Vue.component("services-page", {
  template: `<div id="services">
              <div id="overlay1" class="container"></div>
              <div id="services-banner">
                <h1>{{title}}</h1>
                <div class="contents">
                  <div class="content" v-for="content in contents">{{content.text}}</div><br>
                </div>
                <div class="scroll">
                  <h2>{{scroll.text}}</h2>
                  <svg :viewBox="scroll.icon.viewBox">
                    <path :d="scroll.icon.d"/>
                  </svg>
                </div>
              </div>
              <div id="services-running-text">
                <div class="text" v-for="text in texts" :class="text.classname">
                  <h1>{{text.text}}</h1>
                </div>
              </div>
              <div id="services-next-page">
                <div :class="wave.name" v-for="wave in waves">
                  <img :src="wave.path" :alt="wave.name">
                </div>
                <div class="title">
                  <h1>{{context}}</h1>
                  <div class="more">
                    <a href="javascript:;" @click="setViewAboutUs">{{button2.text}}
                      <svg :viewBox="button2.icon.viewBox">
                        <path :d="button2.icon.d"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "Services",
      contents: [
        { text: "We offer a" },
        { text: "tailor-made solution for" },
        { text: "every project our" },
        { text: "clients entrust us" },
        { text: "with." },
      ],
      scroll: {
        text: "Scroll Down",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      texts: [
        {
          classname: "text1",
          text:
            "Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy Jazzy",
        },
        //吸引人的、花俏的
        {
          classname: "text2",
          text:
            "Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical Allegorical",
        },
        //寓意的
        {
          classname: "text3",
          text:
            "Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral Cerebral",
        },
        //深思的
        {
          classname: "text4",
          text:
            "Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic Kaleidoscopic",
        },
        //千變萬化的
        {
          classname: "text5",
          text:
            "Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal  Optimal OptimalOptimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal Optimal",
        },
      ],
      button2: {
        text: "About us",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      waves: [
        { name: "wave1", path: "../images/wave1.svg" },
        { name: "wave2", path: "../images/wave2.svg" },
      ],
      context: "Next Page",
    };
  },
  methods: {
    setViewAboutUs() {
      eventBus.$emit("changePage", "about-us-page");
    },
    serivcesOverlayAnimation() {
      gsap
        .timeline()
        .to(window, { duration: 0, scrollTo: 0 })
        .to("#overlay1", { duration: 1, opacity: 1, ease: "expo.inOut" })
        .to("#overlay1", 0.5, { duration: 0.5, y: "100vh", ease: "expo.inOut" })
        .from(["#services-banner h1,.contents .content"], {
          duration: 2,
          autoAlpha: 0,
          x: -20,
          scaleY: 1.4,
          ease: "power4.out",
          stagger: { amount: 0.2 },
        })
        .from(
          [".scroll h2", ".scroll svg"],
          {
            duration: 1,
            x: 20,
            autoAlpha: 0,
            ease: "power4.out",
            stagger: {
              amount: 0.1,
            },
          },
          "-=0.8"
        );
    },
    nextPageScrollAnimation() {
      let tl = gsap.timeline();
      tl.from(".wave1", {
        duration: 2,
        y: 700,
        ease: "power3.out",
      }).from(
        ".wave2",
        {
          duration: 1,
          y: 100,
          ease: "power2.out",
        },
        "-=1"
      );

      ScrollTrigger.create({
        animation: tl,
        trigger: "#services-next-page",
        start: "350px 90%",
        end: "+=200",
        toggleActions: "play reverse reverse reverse",
        scrub: 1,
      });
    },
    runningTextScrollAnimation() {
      for (let i = 1; i <= this.texts.length; i++) {
        if (i % 2) {
          var GSAP = gsap.fromTo(
            `.text${i}`,
            { x: "150vw", autoAlpha: 0 },
            { x: "-150vw", autoAlpha: 1, duration: 3, ease: "power1.out" }
          );
        } else {
          var GSAP = gsap.fromTo(
            `.text${i}`,
            { x: "-300vw", autoAlpha: 0 },
            { x: "-150vw", autoAlpha: 1, duration: 3, ease: "power1.out" }
          );
        }

        this.mediaQueryWatcher("(min-width:768px)", function (matches) {
          let configs;
          if (matches) {
            configs = {
              animation: GSAP,
              trigger: "#services-running-text",
              start: "200px 80%",
              end: "bottom top",
              scrub: 4,
              toggleActions: "play none none reverse",
            };
          } else {
            configs = {
              animation: GSAP,
              trigger: "#services-running-text",
              start: "100px 80%",
              end: "bottom top",
              scrub: 3,
              toggleActions: "play none none reverse",
            };
          }
          ScrollTrigger.create(configs);
        });
      }
    },
    mediaQueryWatcher(mediaQuery, callbackFn) {
      let mq = window.matchMedia(mediaQuery);
      mq.addListener((e) => {
        return callbackFn(e.matches);
      });
      callbackFn(mq.matches);
    },
  },
  mounted() {
    this.serivcesOverlayAnimation();
    this.nextPageScrollAnimation();
    this.runningTextScrollAnimation();
  },
});
Vue.component("about-us-page", {
  template: `<div id="about-us">
              <div id="overlay1" class="container"></div>
              <div id="about-us-banner">
                <h1>{{title}}</h1>                
                <div class="contents">
                    <div class="content" v-for="content in contents">{{content.text}}</div>
                </div>
                <div class="scroll">
                  <h2>{{scroll.text}}</h2>
                  <svg :viewBox="scroll.icon.viewBox">
                    <path :d="scroll.icon.d"/>
                  </svg>
                </div>
              </div>
              <div id="about-us-teams">
                <div v-for="person in people" class="person" :class="person.className">
                  <div class="image">
                    <img :src="person.imgpath" :alt="person.name">
                  </div>
                  <div class="image_back" :style="{backgroundImage:'url('+person.imgpath_back+')'}">
                  </div>
                  <div class="info">
                    <h3>{{person.name}}</h3>
                    <p>{{person.title}}</p>
                  </div>
                  <div class="info_back">
                    <h1>{{person.slogan}}</h1>
                    <h2>{{person.name}}</h2>
                  </div>
                  <div class="skills">
                    <div class="skill" v-for="skill in person.skills">
                      <div class="item">
                        <p>{{skill.skill}}</p>
                      </div>
                      <div v-show="person.className !== 'person3'" class="number">
                        <span class="bar-percent" style="width:0%">{{skill.percent}}</span>
                      </div>
                      <div v-show="person.className === 'person3'" class="number">
                        <span class="bar" :style="{width:skill.percent}"></span>
                        <span class="percent">{{skill.percent}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "About us",
      contents: [
        { text: "We  are a team of" },
        { text: "crazy pepole whose" },
        { text: "obsession for" },
        { text: "wonderful in branding" },
        { text: "made us cross paths." },
      ],
      scroll: {
        text: "Scroll Down",
        icon: {
          viewBox: "0 0 31.49 31.49",
          d:
            "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z",
        },
      },
      people: [
        {
          className: "person1",
          name: "Amy Li",
          title: "Adventure Photographer",
          imgpath: "../images/person1.jpg",
          imgpath_back: "../images/person1_back.jpg",
          slogan: "''Boundaries can't limit you''",
          skills: [
            { skill: "HTML5", percent: "90%" },
            { skill: "CSS", percent: "87%" },
            { skill: "JS", percent: "60%" },
            { skill: "PHP", percent: "43%" },
            { skill: "PS", percent: "28%" },
            { skill: "AI", percent: "25%" },
            { skill: "AE", percent: "20%" },
            { skill: "PR", percent: "16%" },
          ],
        },
        {
          className: "person2",
          name: "Jacko Chen",
          title: "Adventure Photographer",
          imgpath: "../images/person2.jpg",
          imgpath_back: "../images/person2_back.jpg",
          slogan: "''There is an amazing power to carry around''",
          skills: [
            { skill: "HTML5", percent: "91%" },
            { skill: "CSS", percent: "87%" },
            { skill: "JS", percent: "67%" },
            { skill: "PHP", percent: "33%" },
            { skill: "PS", percent: "23%" },
            { skill: "AI", percent: "18%" },
            { skill: "AE", percent: "9%" },
            { skill: "PR", percent: "3%" },
          ],
        },
        {
          className: "person3",
          name: "Peter Liu",
          title: "Free Lancing",
          imgpath: "../images/person3.jpg",
          imgpath_back: "../images/person3_back.jpg",
          slogan:
            "''Anything is where it should be, and anything makes sense''",
          skills: [
            { skill: "HTML5", percent: "30%" },
            { skill: "CSS", percent: "25%" },
            { skill: "JS", percent: "17%" },
            { skill: "PHP", percent: "53%" },
            { skill: "PS", percent: "46%" },
            { skill: "AI", percent: "23%" },
          ],
        },
      ],
    };
  },
  methods: {
    overlayAnimation() {
      gsap
        .timeline()
        .to(window, { duration: 0, scrollTo: 0 })
        .from("#overlay1", { duration: 1, opacity: 0, ease: "expo.inOut" })
        .to("#overlay1", { duration: 0.5, y: "100vh", ease: "expo.inOut" })
        .from("#about-us-banner", {
          duration: 1.5,
          autoAlpha: 0,
          x: "50vh",
          ease: "power4.out",
        })
        .from(
          "#about-us-banner",
          {
            duration: 0.5,
            scale: 0.95,
            ease: "power4.out",
          },
          "-=.2"
        )
        .from("#about-us-banner h1", {
          duration: 0.3,
          autoAlpha: 0,
          ease: "power1.out",
        })
        .from(
          ".content",
          {
            duration: 0.5,
            autoAlpha: 0,
            stagger: 0.25,
            ease: "power1.out",
          },
          "-=0.2"
        )
        .from(
          ".scroll",
          {
            duration: 0.3,
            autoAlpha: 0,
          },
          "-=0.2"
        );
    },
    person1ScrollAnimation() {
      let tl = gsap.timeline({
        defaults: {
          ease: "power1.out",
          duration: 2,
        },
      });

      tl.fromTo(
        ".person1 .image img",
        { width: "60%", height: "80%" },
        {
          width: "100%",
          height: "102vh",
        }
      )
        .from(".person1 .info", {
          autoAlpha: 0,
          delay: 0.3,
        })
        .to(".person1 .info", {
          autoAlpha: 0,
          delay: 0.2,
        })
        .to(".person1 .image_back", {
          height: "102vh",
          delay: 1,
          duration: 5,
        })
        .from(".person1 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
        })
        .to(".person1 .image img", {
          autoAlpha: 0,
        })
        .to(".person1 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
          duration: 2,
        })
        .to(".person1 .image_back", {
          height: "50vh",
          top: 0,
          left: 0,
          delay: 0.5,
        })
        .fromTo(
          ".person1 .skills",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.1,
            top: "55%",
            left: "5%",
            onComplete() {
              let span = document.querySelectorAll(
                ".person1 .skills .number .bar-percent"
              );
              let counter = [
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
              ];
              let countNumber = [
                { var: 90 },
                { var: 87 },
                { var: 60 },
                { var: 43 },
                { var: 28 },
                { var: 25 },
                { var: 20 },
                { var: 16 },
              ];

              gsap.from(".person1 .skills .number span", {
                duration: 1.8,
                autoAlpha: 0,
                ease: "expo.out",
              });
              for (let i = 0; i < span.length; i++) {
                gsap.to(counter[i], 2, {
                  var: countNumber[i].var,
                  ease: "expo.out",
                  onUpdate() {
                    span[i].textContent = `${Math.ceil(counter[i].var)}%`;
                    span[i].style.width = `${Math.ceil(counter[i].var)}%`;
                  },
                });
              }
            },
          }
        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".person1",
        start: "10rem top",
        end: "+=400%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });
    },
    person2ScrollAnimation() {
      let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
      tl.fromTo(
        ".person2 .image img",
        { width: "60%", height: "80%" },
        {
          width: "100%",
          height: "102vh",
          duration: 1,
        }
      )
        .from(".person2 .info", {
          autoAlpha: 0,
          delay: 0.3,
          duration: 1,
        })
        .to(".person2 .info", {
          autoAlpha: 0,
          delay: 0.2,
          duration: 1,
        })
        .to(".person2 .image_back", {
          width: "100vw",
          delay: 1,
          duration: 5,
        })
        .from(".person2 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
          duration: 1,
        })
        .to(".person2 .image img", {
          autoAlpha: 0,
          duration: 1,
        })
        .to(".person2 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
          duration: 1,
        })
        .to(".person2 .image_back", {
          height: "50vh",
          top: 0,
          left: 0,
          delay: 0.8,
          duration: 1.5,
        })
        .fromTo(
          ".person2 .skills",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            top: "55%",
            left: "5%",
            duration: 0.1,
            onComplete() {
              let span = document.querySelectorAll(
                ".person2 .skills .number .bar-percent"
              );
              let counter = [
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
              ];
              let countNumber = [
                { var: 91 },
                { var: 87 },
                { var: 67 },
                { var: 33 },
                { var: 23 },
                { var: 18 },
                { var: 9 },
                { var: 3 },
              ];

              gsap.from(".person2 .skills .number span", {
                duration: 1.8,
                autoAlpha: 0,
                ease: "expo.out",
              });
              for (let i = 0; i < span.length; i++) {
                gsap.to(counter[i], 2, {
                  var: countNumber[i].var,
                  ease: "expo.out",
                  onUpdate() {
                    span[i].textContent = `${Math.ceil(counter[i].var)}%`;
                    span[i].style.width = `${Math.ceil(counter[i].var)}%`;
                  },
                });
              }
            },
          }
        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".person2",
        start: "10rem top",
        end: "+=400%",
        pin: true,
        scrub: true,
      });
    },
    person3ScrollAnimation() {
      let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 1 } });

      tl.fromTo(
        ".person3 .image img",
        { width: "60%", height: "80%" },
        {
          width: "100%",
          height: "102vh",
        }
      )
        .from(".person3 .info", {
          autoAlpha: 0,
          delay: 0.3,
        })
        .to(".person3 .info", {
          autoAlpha: 0,
          delay: 0.2,
        })
        .to(".person3 .image_back", {
          height: "102vh",
          delay: 1,
          duration: 2,
        })
        .from(".person3 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
        })
        .to(".person3 .image img", {
          autoAlpha: 0,
        })
        .to(".person3 .info_back", {
          autoAlpha: 0,
          delay: 0.3,
        })
        .to(".person3 .image_back", {
          height: "50vh",
          top: 0,
          left: 0,
          delay: 0.5,
        })
        .fromTo(
          ".person3 .skills",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.1,
            top: "52%",
            left: "5%",
            onComplete() {
              let bar = document.querySelectorAll(
                ".person3 .skills .number .bar"
              );
              let percent = document.querySelectorAll(
                ".person3 .skills .number .percent"
              );
              let counter = [
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
                { var: 0 },
              ];
              let countNumber = [
                { var: 30 },
                { var: 25 },
                { var: 17 },
                { var: 53 },
                { var: 46 },
                { var: 23 },
              ];

              gsap.from(percent, {
                duration: 1.8,
                autoAlpha: 0,
                ease: "expo.out",
              });
              for (let i = 0; i < bar.length; i++) {
                gsap.to(counter[i], 2, {
                  var: countNumber[i].var,
                  ease: "expo.out",
                  onUpdate() {
                    percent[i].textContent = `${Math.ceil(counter[i].var)}%`;
                    bar[i].style.width = `${Math.ceil(counter[i].var)}%`;
                  },
                });
              }
            },
          }
        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".person3",
        start: "10rem top",
        end: "+=400%",
        pin: true,
        scrub: true,
      });
    },
  },
  mounted() {
    this.overlayAnimation();
    this.person1ScrollAnimation();
    this.person2ScrollAnimation();
    this.person3ScrollAnimation();
  },
});
new Vue({
  el: "#app",
  data() {
    return {
      view: "case-studies-page",
    };
  },
  methods: {
    changePages() {
      eventBus.$on("changePage", (p) => {
        this.view = p;
        gsap
          .timeline()
          .to("#nav", {
            duration: 0,
            css: { display: "none", visibility: "hidden", opacity: 0 },
          })
          .to(
            [
              "#banner,#cases,#approach-banner,#services-banner,#about-us-banner,#approach-services-link,#approach-next-page",
            ],
            0.8,
            {
              y: 0,
            },
            "-.2"
          )
          .to("#circle", {
            duration: 0.6,
            delay: -0.6,
            css: {
              strokeDashoffset: -193,
              strokeDasharray: 227,
            },
          })
          .to("#path_1", {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          })
          .to("#path_2", {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          })
          .to("#line_1", {
            duration: 0.4,
            delay: -0.6,
            css: {
              strokeDashoffset: 40,
              strokeDasharray: 40,
            },
          })
          .to(".hamburger span", {
            duration: 0.6,
            delay: -0.6,
            scaleX: 1,
            transformOrigin: "50% 0%",
            ease: "expo.inOut",
          })
          .to(".hamburger-close", {
            duration: 0,
            delay: -0.1,
            css: { display: "none" },
          });
      });
    },
  },
  mounted() {
    this.changePages();
  },
});
