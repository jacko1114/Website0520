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
                  <a href="javascript:;" @click="setView">{{logo.name}}</a>
                </div>
                <div class="nav-toggle">
                  <div class="hamburger" @click="open()">
                    <span v-for="num in spanNumber"></span>
                  </div>
                  <div class="hamburger-close" @click="close()">
                    <svg>
                      <g id="group_1" data-name="group 1" transform="translate(-152 -439)">
                        <line id="line_1" data-name="line 1" y1="14.91" transform="translate(184 463.788)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <path id="path_1" data-name="path 1" d="M6,9.155,10.949,5" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <path id="path_2" data-name="path 2" d="M10.949,5,15.9,9.155" transform="translate(173.051 458.302)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
                        <g id="ellipse_1" data-name="ellipse 1" transform="translate(152 439)" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2.5">
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
        .to("#nav", 0, {
          css: { display: "block" },
        })
        .to(
          "#nav",
          0.8,
          {
            y: 0,
            ease: "power4.out",
          },
          "-=.3"
        )
        .to(
          ["#banner,#cases,#approach-banner,#services-banner,#about-us-banner"],
          0.4,
          {
            y: "50vh",
            ease: "power4.out",
          },
          "-=.5"
        )
        .to(".hamburger span", 0.6, {
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", 0.6, {
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
          ease: "expo.inOut",
        })
        .to(".hamburger-close", 1, {
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
        .to("#nav", 0.6, {
          y: "-100vh",
        })
        .to(
          ["#banner,#cases,#approach-banner,#services-banner,#about-us-banner"],
          0.5,
          {
            y: 0,
          },
          "-=.7"
        )
        .to("#circle", 0.6, {
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#path_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#path_2", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#line_1", 0.4, {
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger span", 0.6, {
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-close", 0, {
          delay: -0.1,
          css: { display: "none" },
        })
        .to("#nav", 0, {
          css: { display: "none" },
        });
    },
    setView() {
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
                    <a href="javascript:;">{{button.text}}
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
  mounted() {
    gsap
      .timeline()
      .from(".line span", 1.8, {
        autoAlpha: 0,
        y: 50,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4,
        },
      })
      .to(".overlay-bottom", 2, {
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to("#overlay", 0, {
        css: { display: "none", visibility: "hidden" },
      })
      .from(".case-img img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -1.5,
        stagger: {
          amount: 0.3,
        },
      })
      .to(".case-img img", 2, { css: { display: "none" } });
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
    };
  },
  mounted() {
    gsap
      .timeline()
      .to("#overlay1", 1, { opacity: 1, ease: "expo.inOut" })
      .to("#overlay1", 1, { y: "100vh", ease: "expo.inOut" })
      .from(["#approach-banner h1,.content"], 1, {
        autoAlpha: 0,
        skewY: 7,
        y: 50,
        delay: 0.5,
        ease: "power4.out",
        stagger: { amount: 0.4 },
        transformOrigin: "0 0",
      })
      .from([".scroll h2,.scroll svg"], 0.3, {
        y: 20,
        autoAlpha: 0,
        delay: 0.3,
        ease: "power4.out",
        stagger: {
          amount: 0.2,
        },
      });
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
    };
  },
  mounted() {
    gsap
      .timeline()
      .to("#overlay1", 1, { opacity: 1, ease: "expo.inOut" })
      .to("#overlay1", 0.5, { y: "100vh", ease: "expo.inOut" })
      .from(["#services-banner h1,.contents .content"], 2, {
        autoAlpha: 0,
        x: -20,
        scaleY: 1.4,
        ease: "power4.out",
        stagger: { amount: 0.2 },
      })
      .from(
        [".scroll h2,.scroll svg"],
        1,
        {
          x: 20,
          autoAlpha: 0,
          ease: "power4.out",
          stagger: {
            amount: 0.1,
          },
        },
        "-=0.5"
      );
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
      .to("#overlay1", 1, { opacity: 1, ease: "expo.inOut" })
      .to("#overlay1", 0.5, { y: "100vh", ease: "expo.inOut" })
      .from("#about-us-banner", 1.5, {
        autoAlpha: 0,
        x: "50vh",
        ease: "power4.out",
      })
      .from(
        "#about-us-banner",
        0.5,
        {
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
          .to("#nav", 0.6, {
            y: "-100vh",
          })
          .to(
            [
              "#banner,#cases,#approach-banner,#services-banner,#about-us-banner",
            ],
            0.8,
            {
              y: 0,
            },
            "-.2"
          )
          .to("#circle", 0.6, {
            delay: -0.6,
            css: {
              strokeDashoffset: -193,
              strokeDasharray: 227,
            },
          })
          .to("#path_1", 0.4, {
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          })
          .to("#path_2", 0.4, {
            delay: -0.6,
            css: {
              strokeDashoffset: 10,
              strokeDasharray: 10,
            },
          })
          .to("#line_1", 0.4, {
            delay: -0.6,
            css: {
              strokeDashoffset: 40,
              strokeDasharray: 40,
            },
          })
          .to(".hamburger span", 0.6, {
            delay: -0.6,
            scaleX: 1,
            transformOrigin: "50% 0%",
            ease: "expo.inOut",
          })
          .to(".hamburger-close", 0, {
            delay: -0.1,
            css: { display: "none" },
          })
          .to("#nav", 0, {
            css: { display: "none" },
          });
      });
    },
  },
  mounted() {
    this.changePages();
  },
});
