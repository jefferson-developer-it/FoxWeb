import { $FoxElm } from "../class/FoxElm.js"
import { $Fox } from "../class/FoxGet.js"
import { alignTxt, FoxHTTPMethod, justify, overflow as overflowStyles } from "./Types.Fox"

export interface Config{
    headers?: {
        [x: string]: any
    }
    body?: XMLHttpRequestBodyInit
    query?: object | string
    method?: "POST"|"GET"|"POP"|"UPDATE"|"DELETE"
    signal?: AbortSignal
}

export interface HTTPResponse{
    res?: string, 
    status?: {
        text: string,
        number: number
    }, 
    resJSON?: object | string, 
    typeRes?: XMLHttpRequestResponseType, 
    resText?: string, 
    resURL?: string, 
    resXML?: Document, 
    headers?: string, 
}

export interface StylesFoxes{
    justifyContent?: justify,
    accentColor?: string,
    alignContent?: justify,
    alignItems?: justify,
    alignSelf?: justify,
    alignmentBaseline?: string,
    all?: string,
    animation?: string,
    animationDelay?: string,
    animationDirection?: string,
    animationDuration?: string,
    animationFillMode?: string,
    animationIterationCount?: string,
    animationName?: string,
    animationPlayState?: string,
    animationTimingFunction?: string,
    appearance?: string,
    aspectRatio?: string,
    backfaceVisibility?: string,
    background?: string,
    backgroundAttachment?: string,
    backgroundBlendMode?: string,
    backgroundClip?: string,
    backgroundColor?: string,
    backgroundImage?: string,
    backgroundOrigin?: string,
    backgroundPosition?: string,
    backgroundPositionX?: string,
    backgroundPositionY?: string,
    backgroundRepeat?: string,
    backgroundSize?: string,
    baselineShift?: string,
    blockSize?: string,
    border?: string,
    borderBlock?: string,
    borderBlockColor?: string,
    borderBlockEnd?: string,
    borderBlockEndColor?: string,
    borderBlockEndStyle?: string,
    borderBlockEndWidth?: string,
    borderBlockStart?: string,
    borderBlockStartColor?: string,
    borderBlockStartStyle?: string,
    borderBlockStartWidth?: string,
    borderBlockStyle?: string,
    borderBlockWidth?: string,
    borderBottom?: string,
    borderBottomColor?: string,
    borderBottomLeftRadius?: string,
    borderBottomRightRadius?: string,
    borderBottomStyle?: string,
    borderBottomWidth?: string,
    borderCollapse?: string,
    borderColor?: string,
    borderEndEndRadius?: string,
    borderEndStartRadius?: string,
    borderImage?: string,
    borderImageOutset?: string,
    borderImageRepeat?: string,
    borderImageSlice?: string,
    borderImageSource?: string,
    borderImageWidth?: string,
    borderInline?: string,
    borderInlineColor?: string,
    borderInlineEnd?: string,
    borderInlineEndColor?: string,
    borderInlineEndStyle?: string,
    borderInlineEndWidth?: string,
    borderInlineStart?: string,
    borderInlineStartColor?: string,
    borderInlineStartStyle?: string,
    borderInlineStartWidth?: string,
    borderInlineStyle?: string,
    borderInlineWidth?: string,
    borderLeft?: string,
    borderLeftColor?: string,
    borderLeftStyle?: string,
    borderLeftWidth?: string,
    borderRadius?: string,
    borderRight?: string,
    borderRightColor?: string,
    borderRightStyle?: string,
    borderRightWidth?: string,
    borderSpacing?: string,
    borderStartEndRadius?: string,
    borderStartStartRadius?: string,
    borderStyle?: string,
    borderTop?: string,
    borderTopColor?: string,
    borderTopLeftRadius?: string,
    borderTopRightRadius?: string,
    borderTopStyle?: string,
    borderTopWidth?: string,
    borderWidth?: string,
    bottom?: string,
    boxShadow?: string,
    boxSizing?: string,
    breakAfter?: string,
    breakBefore?: string,
    breakInside?: string,
    captionSide?: string,
    caretColor?: string,
    clear?: string,
    clip?: string,
    clipPath?: string,
    clipRule?: string,
    color?: string,
    colorInterpolation?: string,
    colorInterpolationFilters?: string,
    colorScheme?: string,
    columnCount?: string,
    columnFill?: string,
    columnGap?: string,
    columnRule?: string,
    columnRuleColor?: string,
    columnRuleStyle?: string,
    columnRuleWidth?: string,
    columnSpan?: string,
    columnWidth?: string,
    columns?: string,
    contain?: string,
    content?: string,
    counterIncrement?: string,
    counterReset?: string,
    counterSet?: string,
    cssFloat?: string,
    cssText?: string,
    cursor?: "pointer" | "alias" | "auto" | "default" | "contextmenu" | "help",
    direction?: string,
    display?: "block" | "flex" | "none",
    dominantBaseline?: string,
    emptyCells?: string,
    fill?: string,
    fillOpacity?: string,
    fillRule?: string,
    filter?: string,
    flex?: string,
    flexBasis?: string,
    flexDirection?: string,
    flexFlow?: string,
    flexGrow?: string,
    flexShrink?: string,
    flexWrap?: string,
    float?: "none" | "left" | "right",
    floodColor?: string,
    floodOpacity?: string,
    font?: string,
    fontFamily?: string,
    fontFeatureSettings?: string,
    fontKerning?: string,
    fontOpticalSizing?: string,
    fontSize?: string,
    fontSizeAdjust?: string,
    fontStretch?: string,
    fontStyle?: string,
    fontSynthesis?: string,
    fontVariant?: string,
    fontVariantAlternates?: string,
    fontVariantCaps?: string,
    fontVariantEastAsian?: string,
    fontVariantLigatures?: string,
    fontVariantNumeric?: string,
    fontVariantPosition?: string,
    fontVariationSettings?: string,
    fontWeight?: "bold" | "lighter" | "500" | "400",
    gap?: string,
    grid?: string,
    gridArea?: string,
    gridAutoColumns?: string,
    gridAutoFlow?: string,
    gridAutoRows?: string,
    gridColumn?: string,
    gridColumnEnd?: string,
    gridColumnGap?: string,
    gridColumnStart?: string,
    gridGap?: string,
    gridRow?: string,
    gridRowEnd?: string,
    gridRowGap?: string,
    gridRowStart?: string,
    gridTemplate?: string,
    gridTemplateAreas?: string,
    gridTemplateColumns?: string,
    gridTemplateRows?: string,
    height?: string,
    hyphens?: string,
    imageOrientation?: string,
    imageRendering?: string,
    inlineSize?: string,
    inset?: string,
    insetBlock?: string,
    insetBlockEnd?: string,
    insetBlockStart?: string,
    insetInline?: string,
    insetInlineEnd?: string,
    insetInlineStart?: string,
    isolation?: string,
    justifyItems?: justify,
    justifySelf?: justify,
    left?: string,
    length?: string
    letterSpacing?: string,
    lightingColor?: string,
    lineBreak?: string,
    lineHeight?: string,
    listStyle?: string,
    listStyleImage?: string,
    listStylePosition?: string,
    listStyleType?: string,
    margin?: string,
    marginBlock?: string,
    marginBlockEnd?: string,
    marginBlockStart?: string,
    marginBottom?: string,
    marginInline?: string,
    marginInlineEnd?: string,
    marginInlineStart?: string,
    marginLeft?: string,
    marginRight?: string,
    marginTop?: string,
    marker?: string,
    markerEnd?: string,
    markerMid?: string,
    markerStart?: string,
    mask?: string,
    maskType?: string,
    maxBlockSize?: string,
    maxHeight?: string,
    maxInlineSize?: string,
    maxWidth?: string,
    minBlockSize?: string,
    minHeight?: string,
    minInlineSize?: string,
    minWidth?: string,
    mixBlendMode?: string,
    objectFit?: string,
    objectPosition?: string,
    offset?: string,
    offsetAnchor?: string,
    offsetDistance?: string,
    offsetPath?: string,
    offsetRotate?: string,
    opacity?: string,
    order?: string,
    orphans?: string,
    outline?: string,
    outlineColor?: string,
    outlineOffset?: string,
    outlineStyle?: string,
    outlineWidth?: string,
    overflow?: overflowStyles,
    overflowAnchor?: string,
    overflowWrap?: string,
    overflowX?: overflowStyles,
    overflowY?: overflowStyles,
    overscrollBehavior?: string,
    overscrollBehaviorBlock?: string,
    overscrollBehaviorInline?: string,
    overscrollBehaviorX?: string,
    overscrollBehaviorY?: string,
    padding?: string,
    paddingBlock?: string,
    paddingBlockEnd?: string,
    paddingBlockStart?: string,
    paddingBottom?: string,
    paddingInline?: string,
    paddingInlineEnd?: string,
    paddingInlineStart?: string,
    paddingLeft?: string,
    paddingRight?: string,
    paddingTop?: string,
    pageBreakAfter?: string,
    pageBreakBefore?: string,
    pageBreakInside?: string,
    paintOrder?: string,
    parentRule?: string,
    perspective?: string,
    perspectiveOrigin?: string,
    placeContent?: justify,
    placeItems?: justify,
    placeSelf?: justify,
    pointerEvents?: string,
    position?: "relative" | "fixed" | "static" | "absolute" | "sticky",
    quotes?: string,
    resize?: "both" | "horizontal" | "vertical" | "none",
    right?: string,
    rotate?: string,
    rowGap?: string,
    rubyPosition?: string,
    scale?: string,
    scrollBehavior?: string,
    scrollMargin?: string,
    scrollMarginBlock?: string,
    scrollMarginBlockEnd?: string,
    scrollMarginBlockStart?: string,
    scrollMarginBottom?: string,
    scrollMarginInline?: string,
    scrollMarginInlineEnd?: string,
    scrollMarginInlineStart?: string,
    scrollMarginLeft?: string,
    scrollMarginRight?: string,
    scrollMarginTop?: string,
    scrollPadding?: string,
    scrollPaddingBlock?: string,
    scrollPaddingBlockEnd?: string,
    scrollPaddingBlockStart?: string,
    scrollPaddingBottom?: string,
    scrollPaddingInline?: string,
    scrollPaddingInlineEnd?: string,
    scrollPaddingInlineStart?: string,
    scrollPaddingLeft?: string,
    scrollPaddingRight?: string,
    scrollPaddingTop?: string,
    scrollSnapAlign?: string,
    scrollSnapStop?: string,
    scrollSnapType?: string,
    scrollbarGutter?: string,
    shapeImageThreshold?: string,
    shapeMargin?: string,
    shapeOutside?: string,
    shapeRendering?: string,
    stopColor?: string,
    stopOpacity?: string,
    stroke?: string,
    strokeDasharray?: string,
    strokeDashoffset?: string,
    strokeLinecap?: string,
    strokeLinejoin?: string,
    strokeMiterlimit?: string,
    strokeOpacity?: string,
    strokeWidth?: string,
    tabSize?: string,
    tableLayout?: string,
    textAlign?: alignTxt,
    textAlignLast?: alignTxt,
    textAnchor?: string,
    textCombineUpright?: string,
    textDecoration?: "none" | "underline",
    textDecorationColor?: string,
    textDecorationLine?: string,
    textDecorationSkipInk?: string,
    textDecorationStyle?: string,
    textDecorationThickness?: string,
    textEmphasis?: string,
    textEmphasisColor?: string,
    textEmphasisPosition?: string,
    textEmphasisStyle?: string,
    textIndent?: string,
    textOrientation?: string,
    textOverflow?: string,
    textRendering?: string,
    textShadow?: string,
    textTransform?: "capitalize" | "uppercase" | "lowercase" | "none",
    textUnderlineOffset?: string,
    textUnderlinePosition?: string,
    top?: string,
    touchAction?: string,
    transform?: string,
    transformBox?: string,
    transformOrigin?: string,
    transformStyle?: string,
    transition?: string,
    transitionDelay?: string,
    transitionDuration?: string,
    transitionProperty?: string,
    transitionTimingFunction?: string,
    translate?: string,
    unicodeBidi?: string,
    userSelect?: string,
    verticalAlign?: string,
    visibility?: "hidden" | "visible",
    webkitAlignContent?: string,
    webkitAlignItems?: string,
    webkitAlignSelf?: string,
    webkitAnimation?: string,
    webkitAnimationDelay?: string,
    webkitAnimationDirection?: string,
    webkitAnimationDuration?: string,
    webkitAnimationFillMode?: string,
    webkitAnimationIterationCount?: string,
    webkitAnimationName?: string,
    webkitAnimationPlayState?: string,
    webkitAnimationTimingFunction?: string,
    webkitAppearance?: string,
    webkitBackfaceVisibility?: string,
    webkitBackgroundClip?: string,
    webkitBackgroundOrigin?: string,
    webkitBackgroundSize?: string,
    webkitBorderBottomLeftRadius?: string,
    webkitBorderBottomRightRadius?: string,
    webkitBorderRadius?: string,
    webkitBorderTopLeftRadius?: string,
    webkitBorderTopRightRadius?: string,
    webkitBoxAlign?: string,
    webkitBoxFlex?: string,
    webkitBoxOrdinalGroup?: string,
    webkitBoxOrient?: string,
    webkitBoxPack?: string,
    webkitBoxShadow?: string,
    webkitBoxSizing?: string,
    webkitFilter?: string,
    webkitFlex?: string,
    webkitFlexBasis?: string,
    webkitFlexDirection?: string,
    webkitFlexFlow?: string,
    webkitFlexGrow?: string,
    webkitFlexShrink?: string,
    webkitFlexWrap?: string,
    webkitJustifyContent?: string,
    webkitLineClamp?: string,
    webkitMask?: string,
    webkitMaskBoxImage?: string,
    webkitMaskBoxImageOutset?: string,
    webkitMaskBoxImageRepeat?: string,
    webkitMaskBoxImageSlice?: string,
    webkitMaskBoxImageSource?: string,
    webkitMaskBoxImageWidth?: string,
    webkitMaskClip?: string,
    webkitMaskComposite?: string,
    webkitMaskImage?: string,
    webkitMaskOrigin?: string,
    webkitMaskPosition?: string,
    webkitMaskRepeat?: string,
    webkitMaskSize?: string,
    webkitOrder?: string,
    webkitPerspective?: string,
    webkitPerspectiveOrigin?: string,
    webkitTextFillColor?: string,
    webkitTextStroke?: string,
    webkitTextStrokeColor?: string,
    webkitTextStrokeWidth?: string,
    webkitTransform?: string,
    webkitTransformOrigin?: string,
    webkitTransformStyle?: string,
    webkitTransition?: string,
    webkitTransitionDelay?: string,
    webkitTransitionDuration?: string,
    webkitTransitionProperty?: string,
    webkitTransitionTimingFunction?: string,
    webkitUserSelect?: string,
    whiteSpace?: string,
    widows?: string,
    width?: string,
    willChange?: string,
    wordBreak?: string,
    wordSpacing?: string,
    wordWrap?: string,
    writingMode?: string,
    zIndex?: string,
}

export interface SettingsFox{
    id?: String,
    typeBtn?: "button" | "submit" 
    typeInput?: "text" | "email" | "password" | "search" | "date",
    placeholder?: string,
    class?: string[],
    initialInputValue?: string,
    text?: string,
    textHTML?: string,
    textPlus?: string,
    textHTMLPlus?: string,
    rel?: string,
    href?: string,
    style?: StylesFoxes,
    feather?: $FoxElm
}

export interface genRandomType {
    templateMask?: string,
    noNum?: boolean,
    noUpChar?: boolean,
    noLowerChar?: boolean,
    firstChar?: string
    noSpecial?: boolean
}
