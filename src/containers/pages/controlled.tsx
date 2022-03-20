import { ComicViewer } from "index";
import Layout from "components/Layout";
import React, { FC, useState } from "react";
import Hotkeys from "react-hot-keys";

const Image = (props: { src: string; classname: string }) => {
    return <img src={props.src} className={props.classname} alt={"custom"}/>
}
const Pages: FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    return (
        <Layout>
            {Array.from({ length: 9 }).map((_, index) => {
                // 0 → move to 0 index
                return <Hotkeys keyName={String(index)} onKeyUp={() => {
                    console.log("????", index)
                    return setCurrentPage(index)
                }
                } key={index}/>
            })}
            <ComicViewer
                currentPage={currentPage}
                isExpansion={false}
                onTryMoveNextPage={(nextPage) => {
                    console.log("Try to move" + nextPage);
                }}
                onTryMovePrevPage={(prevPage) => {
                    console.log("Try to move" + prevPage);
                }}
                onChangedCurrentPage={(currentPage) => {
                    console.trace(currentPage);
                    setCurrentPage(currentPage);
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
    )
};

export default Pages;
