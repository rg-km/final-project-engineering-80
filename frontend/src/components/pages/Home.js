import React from 'react';

function BaseCard (props) {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 6 }}>Home</h2>
      <div
        style={{
          overflow: "hidden",
          margin: "0 -24px 12px"
        }}
      >
        <div
          style={{
            whiteSpace: props.stack ? "normal" : "nowrap",
            overflowX: "scroll",
            paddingRight: 24 - props.spacing,
            paddingLeft: 24 - props.spacing,
            marginBottom: -15
          }}
        >
          {Array(4)
            .fill(1)
            .map((_, i) => {
              return (
                <div
                  style={{
                    width: `${100 / props.visible}%`,
                    display: "inline-block",
                    position: "relative",
                    paddingBottom: props.stack ? 12 : 0
                  }}
                  key={i}
                >
                  <div
                    style={{
                      paddingRight: props.spacing,
                      paddingLeft: props.spacing,
                      height: "100%",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        paddingTop: `${100 * props.ratio}%`,
                        position: "relative"
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0
                        }}
                        children={props.children}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

function Box(props) {
  return (
    <div style={{ background: props.color, width: "100%", height: "100%" }} />
  );
}

function Home() {
  return (
    <div className="Home">
      <BaseCard
        visible={1}
        spacing={6}
        ratio={0.5}
        children={<Box color="#aaa" />}
      />
      <BaseCard
        visible={2}
        spacing={6}
        ratio={0.625}
        children={<Box color="#aaa" />}
      />
      <BaseCard
        stack
        visible={3}
        spacing={6}
        ratio={0.625}
        children={<Box color="#aaa" />}
      />
      <BaseCard
        visible={4}
        spacing={6}
        ratio={0.3}
        children={<Box color="#aaa" />}
      />
    </div>
  );
}



export default Home;
