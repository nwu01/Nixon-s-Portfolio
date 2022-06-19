import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {

    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    
    return (
        /* Particle 1 */
        // <Particles
        //     id="tsparticles"
        //     init={particlesInit}
        //     loaded={particlesLoaded}
        //     options={{
        //         fpsLimit: 120,
        //         interactivity: {
        //           events: {
        //             onClick: {
        //               enable: true,
        //               mode: "push",
        //             },
        //             onHover: {
        //               enable: true,
        //               mode: "",
        //             },
        //             resize: true,
        //           },
        //           modes: {
        //             push: {
        //               quantity: 4,
        //             },
        //             repulse: {
        //               distance: 200,
        //               duration: 0.4,
        //             },
        //           },
        //         },
        //         particles: {
        //           color: {
        //             value: "#ffffff",
        //           },
        //           links: {
        //             color: "#ffffff",
        //             distance: 150,
        //             enable: true,
        //             opacity: 0.5,
        //             width: 1,
        //           },
        //           collisions: {
        //             enable: true,
        //           },
        //           move: {
        //             direction: "none",
        //             enable: true,
        //             outModes: {
        //               default: "bounce",
        //             },
        //             random: false,
        //             speed: 1,
        //             straight: false,
        //           },
        //           number: {
        //             density: {
        //               enable: true,
        //               area: 800,
        //             },
        //             value: 80,
        //           },
        //           opacity: {
        //             value: 0.5,
        //           },
        //           shape: {
        //             type: "circle",
        //           },
        //           size: {
        //             value: { min: 1, max: 5 },
        //           },
        //         },
        //         detectRetina: true,
        //       }}
        //     />

            /* Particles 2 */
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 60,
                interactivity: {
                  detectsOn: "canvas",
                  events: {
                    onClick: { enable: true, mode: "repulse" },
                    onHover: {
                      enable: true,
                      mode: "bubble",
                      parallax: { enable: false, force: 2, smooth: 10 }
                    },
                    resize: true
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 0.3,
                      opacity: 1,
                      size: 4,
                      speed: 1
                    },
                    grab: { distance: 400, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                    repulse: { distance: 200, duration: 0.4 }
                  }
                },
                particles: {
                  color: { value: "#fff" },
                  links: {
                    color: "#ffffff",
                    distance: 500,
                    enable: false,
                    opacity: 0.4,
                    width: 2
                  },
                  move: {
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    size: true,
                    speed: 0.1,
                    straight: false
                  },
                  number: { density: { enable: true, area: 800 }, value: 400 },
                  opacity: {
                    random: true,
                    value: 0.5
                  },
                  shape: {
                    type: "circle"
                  },
                  size: {
                    random: true,
                    value: 4
                  }
                },
                detectRetina: true
              }}
            />
    )
}

export default Particle