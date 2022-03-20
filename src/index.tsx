import React, { ComponentPropsWithoutRef, FC, useCallback, useEffect, useMemo, useRef, useState, } from "react";
import {
    CloseButton,
    ControlButton,
    Controller,
    Img,
    ImgProps,
    MainController,
    NavigationButton,
    Page,
    PageCountController,
    PageProps,
    PagesWrapper,
    PagesWrapperProps,
    RangeInput,
    ScaleController,
    SubController,
    Viewer,
    Wrapper,
    WrapperProps,
} from "./style";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BiChevronLeft, BiChevronRight, BiCollapse, BiExpand, BiFullscreen, BiMoveHorizontal, } from "react-icons/bi";
import useOutsideClickRef from "@rooks/use-outside-click-ref";
import { CgClose } from "react-icons/cg";
import { useSwipeable } from "react-swipeable";
import useDidUpdate from "@rooks/use-did-update";
import { ClassNames } from "@emotion/react";
import Hotkeys from 'react-hot-keys';
import { useWindowSize } from "@react-hook/window-size";

/**
 * Note: Page is 0-index
 */
export type CommonComicViewerProps = {
    // These may be failed
    onTryMovePrevPage?: (prevPage: number) => void;
    onTryMoveNextPage?: (nextPage: number) => void;
    // This is fired after moved
    onChangedCurrentPage?: (currentPage: number) => void;
    onChangeExpansion?: (isExpansion: boolean) => void;
    pages: Array<string | FC<{ className: string }>>;
    switchingRatio?: number;
    text?: Record<"expansion" | "fullScreen" | "move" | "normal", string>;
}
export type UnControlledComicViewerProps = CommonComicViewerProps & {
    /**
     * 0-index
     */
    initialCurrentPage?: number;
    initialIsExpansion?: boolean;
    initialPreloadCount?: number;
};
export type ControlledComicViewerProps = CommonComicViewerProps & {
    /**
     * 0-index
     */
    currentPage?: number;
    isExpansion?: boolean;
    preloadCount?: number;
};
export type ComicViewerProps = ControlledComicViewerProps | UnControlledComicViewerProps;

function usePrevious<T>(value: T) {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const isControlledProps = (props: ComicViewerProps): props is ControlledComicViewerProps => {
    return "currentPage" in props || "isExpansion" in props || "preloadCount" in props;
}
const assertControlledComicViewerProps = (props: ComicViewerProps) => {
    const uncontrolled =
        "initialCurrentPage" in props ||
        "initialIsExpansion" in props ||
        "initialPreloadCount" in props;
    if (uncontrolled) {
        throw new Error("Controlled ComicView can not pass initialize* props. It is for uncontrolled")
    }
}
const ControlledComicViewer: FC<ControlledComicViewerProps> = (props) => {
    const {
        onTryMoveNextPage,
        onTryMovePrevPage,
        onChangedCurrentPage,
        onChangeExpansion,
        pages,
        switchingRatio = 1,
        text = {
            expansion: "Expansion",
            fullScreen: "Full screen",
            move: "Move",
            normal: "Normal",
        },
        currentPage: propsCurrentPage,
        isExpansion: propsIsExpansion,
        preloadCount: propsPreloadCount
    } = props;
    const { expansion: expansionText, fullScreen, move, normal } = useMemo(
        () => text,
        [text]
    );
    const [width, height] = useWindowSize();
    const [isExpansion, setIsExpansion] = useState<WrapperProps["isExpansion"]>(propsIsExpansion ?? false);

    const isPrevExpansion = usePrevious(isExpansion);
    const [currentPage, setCurrentPage] = useState(propsCurrentPage ?? 0);
    const prevCurrentPage = usePrevious(currentPage);
    const [preload, setPreload] = useState(propsPreloadCount ?? 30);
    const isSingleView = useMemo<ImgProps["isSingleView"]>(
        () => height > width * switchingRatio,
        [switchingRatio, height, width]
    );
    // 0-index
    const maxPageIndex = useMemo(() => {
        return (isSingleView ? pages.length : Math.ceil(pages.length / 2) - 1)
    }, [isSingleView, pages.length]);
    // 0-index
    const currentPageIndex = useMemo(() => {
        return isSingleView
            ? currentPage
            : Math.floor(currentPage / 2)
    }, [currentPage, isSingleView]);
    // controlled effect
    useEffect(() => {
        if (propsCurrentPage !== undefined && propsCurrentPage !== prevCurrentPage) {
            // double up bug
            const absPage = (
                isSingleView ? (propsCurrentPage) : (propsCurrentPage) * 2
            );
            console.log("ABBBBBBC ", absPage);
            if (absPage >= maxPageIndex) {
                setCurrentPage(maxPageIndex)
            } else if (absPage <= 0) {
                setCurrentPage(0)
            } else {
                setCurrentPage(absPage)
            }
        }
    }, [isSingleView, maxPageIndex, prevCurrentPage, propsCurrentPage]);
    useEffect(() => {
        if (typeof propsIsExpansion === "boolean") {
            setIsExpansion(propsIsExpansion)
        }
    }, [propsIsExpansion]);
    useEffect(() => {
        if (typeof propsPreloadCount === "boolean") {
            setPreload(propsPreloadCount)
        }
    }, [propsPreloadCount]);
    const [switchingFullScreen, setSwitchingFullScreen] = useState<PagesWrapperProps["switchingFullScreen"]>(false);
    const handle = useFullScreenHandle();
    const { active, enter, exit } = useMemo(() => handle, [handle]);
    const handleClickOnExpansion = useCallback<NonNullable<ComponentPropsWithoutRef<"button">["onClick"]>>(() => {
        setIsExpansion((prevIsExpansion) => !prevIsExpansion);
    }, []);
    const handleClickOnFullScreen = useCallback<NonNullable<ComponentPropsWithoutRef<"button">["onClick"]>>(() => {
        setSwitchingFullScreen(true);

        enter();
    }, [enter]);
    const handleClickOnClose = useCallback<NonNullable<ComponentPropsWithoutRef<"button">["onClick"]>>(() => {
        setSwitchingFullScreen(true);

        exit();
    }, [exit]);
    const pageWidth = useMemo<PageProps["width"]>(
        () => (height > width * switchingRatio ? width : width / 2),
        [switchingRatio, height, width]
    );
    const expansion = useMemo<ComponentPropsWithoutRef<"button">["children"]>(
        () => (isExpansion ? normal : expansionText),
        [expansionText, isExpansion, normal]
    );
    const expansionIcon = useMemo(
        () =>
            isExpansion ? (
                <BiCollapse color="#fff" size={24}/>
            ) : (
                <BiExpand color="#fff" size={24}/>
            ),
        [isExpansion]
    );
    const items = useMemo(
        () =>
            pages.map((page, index) => {
                if (index < currentPage + preload) {
                    return (
                        <Page key={index} width={pageWidth}>
                            {typeof page === "string" ? (
                                <Img
                                    alt={""}
                                    isOdd={!(index % 2)}
                                    isSingleView={isSingleView}
                                    src={page}
                                />
                            ) : (
                                // eslint-disable-next-line react/jsx-no-undef
                                <ClassNames>
                                    {({ css }) => {
                                        const isOdd = !(index % 2)
                                        const objectPosition = isSingleView ? "center" : isOdd ? "left" : "right";
                                        return (
                                            React.createElement(page, {
                                                className: css`
                                                  height: 100%;
                                                  object-fit: contain;
                                                  object-position: ${objectPosition};
                                                  width: 100%;
                                                `
                                            })
                                        )
                                    }}
                                </ClassNames>)}
                        </Page>
                    )
                }
                return (
                    <Page key={index} width={pageWidth}>
                        {page}
                    </Page>
                )
            }),
        [isSingleView, pageWidth, pages, currentPage, preload]
    );
    const [prevIsExpansion, setPrevIsExpansion] = useState<typeof isExpansion | undefined>();
    const disabledNextPage = useMemo(
        () =>
            (isSingleView && currentPage >= pages.length - 1) ||
            (!isSingleView && currentPage >= pages.length - 2),
        [currentPage, isSingleView, pages.length]
    );

    const disabledPrevPage = useMemo(() => currentPage === 0, [currentPage]);
    const [showMove, setShowMove] = useState(false);
    const handleClickOnShowMove = useCallback<NonNullable<ComponentPropsWithoutRef<"button">["onClick"]>>(() => {
        setShowMove(true);
    }, []);
    const nextPage = useCallback(() => {
        const nextPage = currentPage + (isSingleView ? 1 : 2);
        // always fire
        onTryMoveNextPage?.(nextPage);
        if (disabledNextPage) {
            return;
        }
        setSwitchingFullScreen(false);
        setCurrentPage(nextPage);
    }, [currentPage, disabledNextPage, isSingleView, onTryMoveNextPage]);
    const prevPage = useCallback(() => {
        const prevPage = currentPage - (isSingleView ? 1 : 2);
        // always fire
        onTryMovePrevPage?.(prevPage);
        if (disabledPrevPage) {
            return;
        }

        setSwitchingFullScreen(false);
        setCurrentPage(prevPage);
    }, [currentPage, disabledPrevPage, isSingleView, onTryMovePrevPage]);
    const handleClickOnNextPage = useCallback<NonNullable<ComponentPropsWithoutRef<"a">["onClick"]>>(() => {
        nextPage()
    }, [nextPage]);
    const handleClickOnPrevPage = useCallback<NonNullable<ComponentPropsWithoutRef<"a">["onClick"]>>(() => {
        prevPage()
    }, [prevPage]);
    const handleChange = useCallback<NonNullable<ComponentPropsWithoutRef<"input">["onChange"]>>(
        ({ currentTarget: { value } }) => {
            setSwitchingFullScreen(false);
            setCurrentPage(
                isSingleView ? parseInt(value, 10) - 1 : (parseInt(value, 10) - 1) * 2
            );
        },
        [isSingleView]
    );
    const handleClickOnOutside = useCallback(() => {
        setShowMove(false);
    }, []);
    const [ref] = useOutsideClickRef(handleClickOnOutside);
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (disabledPrevPage) {
                return;
            }

            setSwitchingFullScreen(false);
            setCurrentPage(
                (prevCurrentPage) => prevCurrentPage - (isSingleView ? 1 : 2)
            );
        },
        onSwipedRight: () => {
            if (disabledNextPage) {
                return;
            }

            setSwitchingFullScreen(false);
            setCurrentPage(
                (prevCurrentPage) => prevCurrentPage + (isSingleView ? 1 : 2)
            );
        },
    });

    useEffect(() => {
        if (!active) {
            if (typeof prevIsExpansion !== "boolean") {
                return;
            }

            setPrevIsExpansion(undefined);
            setIsExpansion(prevIsExpansion);

            return;
        }

        if (typeof prevIsExpansion === "boolean") {
            return;
        }

        setPrevIsExpansion(isExpansion);
        setIsExpansion(true);
    }, [active, isExpansion, prevIsExpansion]);

    useEffect(() => {
        if (isSingleView) {
            return;
        }
        setCurrentPage((prevCurrentPage) => Math.floor(prevCurrentPage / 2) * 2);
    }, [isSingleView]);

    useEffect(() => {
        if (!onChangedCurrentPage) {
            return;
        }
        // if current page is changed, actually
        // ignore onChangedCurrentPage handler changes
        if (prevCurrentPage !== currentPage) {
            onChangedCurrentPage(currentPage);
        }
    }, [currentPage, onChangedCurrentPage, prevCurrentPage])

    useDidUpdate(() => {
        if (!onChangeExpansion) {
            return;
        }

        // ignore onChangeExpansion changes
        if (isPrevExpansion !== isExpansion) {
            onChangeExpansion(isExpansion);
        }
    }, [isExpansion, onChangeExpansion]);

    return <FullScreen handle={handle}>
        <Hotkeys keyName={"right"} onKeyUp={prevPage}/>
        <Hotkeys keyName={"left"} onKeyUp={nextPage}/>
        <Hotkeys keyName={"space"} onKeyUp={nextPage}/>
        <Hotkeys keyName={"shift+space"} onKeyUp={prevPage}/>
        <Hotkeys keyName={"j"} onKeyUp={nextPage}/>
        <Hotkeys keyName={"k"} onKeyUp={prevPage}/>
        <Wrapper
            height={height}
            isExpansion={isExpansion}
            isFullScreen={active}
            {...handlers}
        >
            <Viewer>
                <PagesWrapper
                    currentPage={currentPage}
                    pageWidth={pageWidth}
                    switchingFullScreen={switchingFullScreen}
                >
                    {items}
                </PagesWrapper>
                <NavigationButton
                    navigation="next"
                    onClick={handleClickOnNextPage}
                    id={"react-comic-viewer-next"}
                    data-is-stop={disabledNextPage}
                >
                    <BiChevronLeft color="#888" size={64}/>
                </NavigationButton>
                <NavigationButton
                    navigation="prev"
                    onClick={handleClickOnPrevPage}
                    data-is-stop={disabledPrevPage}
                    id={"react-comic-viewer-prev"}
                >
                    <BiChevronRight color="#888" size={64}/>
                </NavigationButton>
            </Viewer>
            {active ? (
                <CloseButton onClick={handleClickOnClose} id={"react-comic-viewer-fullscreen-close"}>
                    <CgClose color="#fff" size={36}/>
                </CloseButton>
            ) : (
                <Controller>
                    {showMove ? (
                        <SubController ref={ref}>
                            <RangeInput
                                onChange={handleChange}
                                max={maxPageIndex}
                                min={0}
                                step={1}
                                type="range"
                                value={currentPageIndex}
                            />
                        </SubController>
                    ) : (
                        <MainController>
                            <ScaleController>
                                <ControlButton onClick={handleClickOnExpansion}>
                                    {expansionIcon}
                                    {expansion}
                                </ControlButton>
                                <ControlButton onClick={handleClickOnFullScreen}
                                               id={"react-comic-viewer-fullscreen"}>
                                    <BiFullscreen color="#fff" size={24}/>
                                    {fullScreen}
                                </ControlButton>
                            </ScaleController>
                            <PageCountController>
                                <span>{currentPageIndex}/{maxPageIndex}</span>
                            </PageCountController>
                            <ControlButton onClick={handleClickOnShowMove}>
                                <BiMoveHorizontal color="#fff" size={24}/>
                                {move}
                            </ControlButton>
                        </MainController>
                    )}
                </Controller>
            )}
        </Wrapper>
    </FullScreen>;
};
const UnControlledComicViewer: FC<UnControlledComicViewerProps> = (props) => {
    const { initialIsExpansion, initialCurrentPage, initialPreloadCount, ...commonProps } = props
    // eslint-disable-next-line -- freeze
    const isExpansion = useMemo(() => initialIsExpansion, [])
    // eslint-disable-next-line -- freeze
    const currentPage = useMemo(() => initialCurrentPage, [])
    // eslint-disable-next-line -- freeze
    const preloadCount = useMemo(() => initialPreloadCount, [])
    return <ControlledComicViewer isExpansion={isExpansion}
                                  currentPage={currentPage}
                                  preloadCount={preloadCount}
                                  {...commonProps}/>;
};

export function ComicViewer(props: ComicViewerProps): JSX.Element | null {
    if (typeof window === "undefined") {
        return null;
    }
    if (isControlledProps(props)) {
        assertControlledComicViewerProps(props)
        return <ControlledComicViewer {...props} />;
    } else {
        return <UnControlledComicViewer {...props} />
    }
}
