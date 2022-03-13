import ComicViewer from "index";
import Layout from "components/Layout";
import React, { FC } from "react";

const Image = (props: { src: string; classname: string }) => {
    return <img src={props.src} className={props.classname} alt={"custom"}/>
}
const Pages: FC = () => (
    <Layout>
        <ComicViewer
            initialCurrentPage={2}
            initialIsExpansion={false}
            onChangeCurrentPage={(currentPage) => {
                console.log(currentPage);
            }}
            onChangeExpansion={(isExpansion) => {
                console.log(isExpansion);
            }}
            pages={[
                ({ className }) => <Image src={"/comics/0.jpg"} classname={className}/>,
                ({ className }) => <Image src={"/comics/1.jpg"} classname={className}/>,
                ({ className }) => <Image src={"/comics/2.jpg"} classname={className}/>,
                "/comics/3.jpg",
                "/comics/4.jpg",
                "/comics/5.jpg",
                "/comics/6.jpg",
            ]}
            switchingRatio={0.75}
            text={{
                expansion: "拡大",
                fullScreen: "全画面",
                move: "移動",
                normal: "通常",
            }}
        />
    </Layout>
);

export default Pages;
