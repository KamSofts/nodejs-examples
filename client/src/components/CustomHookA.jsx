import useWindowWidth from "../utils/useWindowWidth";

const CustomHookA = () => {
    const windowWidth = useWindowWidth();

    return (
        <div>
            <h1>CUSTOM HOOK EXAMPLE 1</h1>
            {windowWidth > 768
                ? (<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio
                    maxime necessitatibus quis tempore fugiat error sunt quae minus,
                    dignissimos ea ab cum tenetur, dolores non nisi temporibus nobis
                    consequatur!</h2>)
                : (<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit ex odit sapiente. Omnis aspernatur totam, fuga dicta
                    voluptates, nostrum quia aliquam, veniam cumque quas placeat! Porro
                    ullam minus animi obcaecati!</p>)
            }
        </div>
    );
};

export default CustomHookA;