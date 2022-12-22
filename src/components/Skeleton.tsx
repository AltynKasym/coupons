import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={286}
    height={408}
    viewBox="0 0 286 408"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="286" height="164" />
    <rect x="94" y="177" rx="5" ry="5" width="185" height="24" />
    <rect x="10" y="220" rx="5" ry="5" width="270" height="14" />
    <rect x="10" y="248" rx="5" ry="5" width="270" height="14" />
    <rect x="5" y="345" rx="10" ry="10" width="275" height="50" />
    <rect x="5" y="285" rx="10" ry="10" width="275" height="50" />
    <rect x="17" y="157" rx="5" ry="5" width="48" height="48" />
  </ContentLoader>
)

export default Skeleton