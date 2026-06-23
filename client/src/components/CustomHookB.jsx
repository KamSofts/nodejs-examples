import useWindowWidth from "../utils/useWindowWidth";
import reactImage from "../assets/react.svg";

const CustomHookB = () => {
  const windowWidth = useWindowWidth();

  return (
    <div>
      <h1>CUSTOM HOOK EXAMPLE 2</h1>
      {windowWidth > 768
        ? (<img src={reactImage} alt="image" width={250} />)
        : (<p>
          <b>Image descrption:</b> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus neque possimus dolores aliquam cum illum
          expedita ullam. Magni architecto expedita assumenda! Ipsam adipisci
          modi consequuntur debitis illo voluptate nobis itaque!
        </p>)
      }
    </div>
  )
}

export default CustomHookB;
