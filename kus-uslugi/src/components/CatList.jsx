import "/src/styles/cat_list.css"
import {cats} from "/test_data.js"
import CatInfo from "./CatInfo.jsx";

export default function CatsList() {
    const catsList = cats.map((cat) => (
        <CatInfo name={cat.name}
                 job={cat.job}
                 desc={cat.desc}
                 img={cat.img}
                 key={cat.id}/>)
    );

    return (
      <section className={"list-container"}>
        <ul>{catsList}</ul>
      </section>
    );
}