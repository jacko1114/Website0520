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
                    <div class="item" v-for="subclass in classification[1].subclass">
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
    return { spanNumber: 2, logo: { name: "JACKO." } };
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
  },
  mounted() {
    gsap
      .timeline()
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
                      <a href="javascript:;" @click="setViewServices">{{button1.text}}
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
  },
  mounted() {
    gsap
      .timeline()
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

    let tl = gsap.timeline();
    let controller = new ScrollMagic.Controller();

    tl.from(".wave1", {
      duration: 2,
      y: 500,
      ease: "back.out",
    }).from(".wave2", {
      duration: 1,
      y: 300,
      ease: "power4.out",
    });

    new ScrollMagic.Scene({
      triggerElement: "#approach-next-page",
      triggerhook: 0,
      offset: 50,
      duration: "200%",
    })
      .setTween(tl)
      .addTo(controller);
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
  },
  mounted() {
    gsap
      .timeline()
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
        [".scroll h2,.scroll svg"],
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
    let tl = gsap.timeline();
    let controller = new ScrollMagic.Controller();

    let cw = document.body.clientWidth;
    if (cw >= 1024) {
      args = {};
    } else if (cw > 768) {
      arg = {};
    } else {
    }
    tl.from(".wave1", {
      duration: 2,
      y: 500,
      ease: "power1.out",
    }).from(".wave2", {
      duration: 2,
      y: 100,
      ease: "power1.out",
    });
    new ScrollMagic.Scene({
      triggerElement: "#services-next-page",
      triggerHook: 0.9,
      offset: 350,
      duration: 100,
    })
      .setTween(tl)
      .addTo(controller);

    for (let i = 1; i <= this.texts.length; i++) {
      if (i % 2) {
        var GSAP = gsap.fromTo(
          `.text${i}`,
          { x: "150vw" },
          { x: "-150vw", duration: 4, ease: "power1.out" }
        );
      } else {
        var GSAP = gsap.fromTo(
          `.text${i}`,
          { x: "-300vw" },
          { x: "-150vw", duration: 4, ease: "power1.out" }
        );
      }
      new ScrollMagic.Scene({
        triggerElement: "#services-running-text",
        triggerHook: 0.8,
        offset: 200,
        duration: "800",
      })
        .setTween(GSAP)
        .addTo(controller);
    }
  },
});
Vue.component("about-us-page", {
  template: `<div id="about-us">
              <div id="overlay1" class="container"></div>
              <div id="about-us-banner">
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
    };
  },
  mounted() {
    gsap
      .timeline()
      .to("#overlay1", { duration: 1, opacity: 1, ease: "expo.inOut" })
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
      );
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
