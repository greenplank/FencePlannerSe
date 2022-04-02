const a = "a",
  b = "b",
  c = "c",
  d = "d",
  e = "e",
  f = "f"

export default [
  {
    name: "square",
    shapes: {
      o: "square",
      s: "squareselected",
      d: "squaredisplay"
    },
    calculations: [a, b],
    formula: "a*b"
  },
  {
    name: "dsquare",
    shapes: {
      o: "dsquare",
      s: "dsquareselected",
      d: "dsquaredisplay"
    },
    calculations: [a, b, c, d],
    formula: "(a*b)-(c*d)"
  },
  {
    name: "lshape",
    shapes: {
      o: "lshape",
      s: "lshapeselected",
      d: "lshapedisplay"
    },
    calculations: [a, b, c, d],
    formula: "(a*b)+((c+a)*d)"
  },
  {
    name: "cshape",
    shapes: {
      o: "cshape",
      s: "cshapeselected",
      d: "cshapedisplay"
    },
    calculations: [a, b, c, d, e, f],
    formula: "(a*b)+((f-d)*c)+(f*e)"
  },
  {
    name: "pantagon",
    shapes: {
      o: "pantagon",
      s: "pantagonselected",
      d: "pantagondisplay"
    },
    calculations: [a, b, c, d, e],
    formula: "(c*d)+((e-c)*a)+((d-a)*(e-c)/2)"
  }
];
