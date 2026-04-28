import svgPaths from "./svg-khshm9ac02";
import imgImage1 from "./ab65b1774ba991dc17c5abfd57adda5486f2d9d9.png";

function Svg() {
  return (
    <div className="col-1 h-[24px] relative row-1 self-center shrink-0 w-[140px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 24">
        <g id="SVG">
          <path d={svgPaths.p3f1bfb40} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p30fff600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1b15b880} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p4a9efe8} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pb9bd400} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3e670f60} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p2b038800} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3b883cc0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.pf543c00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p11fbf900} fill="var(--fill-0, white)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___minmax(0,1fr)_0px_minmax(0,1fr)] grid-rows-[_24px] relative shrink-0 w-full" data-name="Container">
      <Svg />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#00ab61] content-stretch flex h-[72px] items-center justify-center py-[16px] relative shrink-0 w-full" data-name="Banner">
      <Container1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p18cc6080} fill="var(--fill-0, #00AB61)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1f381180} fill="var(--fill-0, #00AB61)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[18.55px] relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[96px] justify-center leading-[0] not-italic relative shrink-0 text-[#02391e] text-[16px] w-[273.45px]">
          <p className="leading-[24px] mb-0">Réservez maintenant votre bagage en</p>
          <p className="leading-[24px] mb-0">{`soute et économisez jusqu'à 50%. Le`}</p>
          <p className="leading-[24px] mb-0">prix peut être plus élevé après le</p>
          <p className="leading-[24px]">paiement de la réservation.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e7f3ee] content-stretch flex gap-[8px] items-center min-h-[40px] px-[13px] py-[9px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#afd9c5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-[192.89px]">
          <p className="leading-[36px]">Bagages en soute</p>
        </div>
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[32px]" data-name="SVG">
      <div className="absolute inset-[8.33%_8.34%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6612 26.6668">
          <path d={svgPaths.p850b4c0} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[20px] w-[72.8px]">
        <p className="leading-[32px]">Vol aller</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p3f3d27f0} fill="var(--fill-0, #6A6A6A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-[68.72px]">
        <p className="leading-[20px]">Paris (Orly)</p>
      </div>
      <Container16 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-[66.81px]">
        <p className="leading-[20px]">Marrakech</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[3.75px] items-start relative shrink-0 w-[163.53px]" data-name="Container">
      <Heading />
      <Heading1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] w-full">
        <p className="leading-[28px]">Nathan CHAMPAGNE</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[27.706px] relative shrink-0 w-[32px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.18%] left-[-27.46%] max-w-none top-[-35.59%] w-[155.14%]" src={imgImage1} />
        </div>
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[282px]">
        <p className="leading-[24px]">5 kg (10 €)</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30px] relative shrink-0 w-[340px]">
      <div className="absolute inset-[-3.33%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 32">
          <g id="Group 1">
            <rect fill="var(--fill-0, #AFD9C5)" height="10" id="Rectangle 3" rx="5" width="340" y="11" />
            <rect fill="var(--fill-0, #00AB61)" height="10" id="Rectangle 4" rx="5" width="33" y="11" />
            <g filter="url(#filter0_d_1_7881)" id="Ellipse 1">
              <circle cx="33" cy="16" fill="var(--fill-0, #00AB61)" r="15" />
              <circle cx="33" cy="16" r="12.5" stroke="var(--stroke-0, #E7F3EE)" strokeWidth="5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_7881" width="32" x="17" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7881" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7881" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame />
      <Group />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Frame1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] w-full">
        <p className="leading-[24px]">Total aller</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-start min-w-px relative" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-right w-[23.86px]">
        <p className="leading-[24px]">5 €</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Container24 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="Container">
      <Container23 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end p-[20px] relative size-full">
          <Container20 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Background />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] w-full">
        <p className="leading-[28px]">Passager 2</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="h-[27.706px] relative shrink-0 w-[32px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[179.18%] left-[-27.46%] max-w-none top-[-35.59%] w-[155.14%]" src={imgImage1} />
        </div>
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[282px]">
        <p className="leading-[24px]">5 kg (10 €)</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[340px]">
      <div className="absolute inset-[-3.33%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 32">
          <g id="Group 1">
            <rect fill="var(--fill-0, #AFD9C5)" height="10" id="Rectangle 3" rx="5" width="340" y="11" />
            <rect fill="var(--fill-0, #00AB61)" height="10" id="Rectangle 4" rx="5" width="33" y="11" />
            <g filter="url(#filter0_d_1_7881)" id="Ellipse 1">
              <circle cx="33" cy="16" fill="var(--fill-0, #00AB61)" r="15" />
              <circle cx="33" cy="16" r="12.5" stroke="var(--stroke-0, #E7F3EE)" strokeWidth="5" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32" id="filter0_d_1_7881" width="32" x="17" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7881" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7881" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame3 />
      <Group1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Frame2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] w-full">
        <p className="leading-[24px]">Total aller</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-start min-w-px relative" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] text-right w-[23.86px]">
        <p className="leading-[24px]">5 €</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-name="Container">
      <Container31 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-end p-[20px] relative size-full">
          <Container28 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Background1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container17 />
      <Container25 />
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white h-[581.163px] relative shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(34,34,34,0.05)]" />
    </div>
  );
}

function Svg4() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[32px]" data-name="SVG">
      <div className="absolute inset-[8.33%_51.1%_8.33%_8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9816 26.6664">
          <path d={svgPaths.p1d4ac300} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.96%_8.33%_8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9973 16.5467">
          <path clipRule="evenodd" d={svgPaths.p3c810500} fill="var(--fill-0, #00AB61)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="Container">
      <Svg4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[21.98px] relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[20px] whitespace-nowrap">
        <p className="leading-[32px] mb-0">Emporter des équipements de</p>
        <p className="leading-[32px] mb-0">sport ou des animaux</p>
        <p className="leading-[32px]">domestiques ?</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Heading2 />
    </div>
  );
}

function InputMargin() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[2px] relative shrink-0 w-[20px]" data-name="Input:margin">
      <div className="pointer-events-none relative rounded-[4px] shrink-0 size-[20px]" data-name="Input">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[4px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_#8c8c8c]" />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Oui, à l’étape suivante, j’ajoute mes</p>
        <p className="leading-[24px]">bagages spéciaux.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Label">
      <InputMargin />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Label />
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white h-[218px] relative shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container33 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(34,34,34,0.05)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container9 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 py-[24px] right-0 top-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] w-[49.22px]">
        <p className="leading-[24px]">Retour</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container41 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex items-start min-h-[40px] px-[21px] py-[9px] relative rounded-[999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Container40 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] right-0 top-[861px]" data-name="Background">
      <Container39 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[26.1px]">
        <p className="leading-[18px]">Total</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['SF_Compact_Rounded:Semibold',sans-serif] items-start leading-[0] not-italic relative shrink-0 text-[#222]" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0 text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">108,</p>
      </div>
      <div className="flex flex-col h-[24px] justify-center relative shrink-0 text-[16px] w-[20.45px]">
        <p className="leading-[24px]">00</p>
      </div>
      <div className="flex flex-col h-[28px] justify-center relative shrink-0 text-[18px] w-[11.7px]">
        <p className="leading-[28px]">€</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2f2ceb00} fill="var(--fill-0, #444444)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDetails() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="Button - Détails">
      <Svg5 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <ButtonDetails />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[97.15px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p31a8a300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e20076] content-stretch flex flex-col items-start min-h-[48px] px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Button">
      <Container49 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative self-stretch" data-name="Container">
      <Container44 />
      <Button />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[12px] relative size-full">
        <Container43 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px px-[24px] right-0 top-[635px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f7f7f7] h-[935px] relative shrink-0 w-full" data-name="Main">
      <Container3 />
      <Background2 />
      <BackgroundHorizontalBorder />
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">© 2026 Transavia</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Déclaration d’accessibilité non conforme</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Conditions de transport</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Politique d’accès et de distribution des services</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Avis juridique</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Confidentialité</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Conditions d’utilisation</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Payer en toute sécurité</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Politique des cookies</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Esclavage moderne</p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Prestation de voyage liée</p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px] mb-0">Conditions liées au réacheminement , au remboursement et à</p>
        <p className="leading-[18px]">l’attribution d’un avoir</p>
      </div>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Signalement de vulnérabilité</p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Israeli Aviation Services Law</p>
      </div>
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-full">
        <p className="leading-[18px]">Kingdom of Saudi Arabia Passenger Rights</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
      <ItemLink11 />
      <ItemLink12 />
      <ItemLink13 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[36px] w-[106.49px]">
        <p className="leading-[56px]">Footer</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-1048px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <List />
        <Container52 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[40px] pt-[41px] px-[24px] relative size-full">
        <Nav />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[780px] relative shrink-0 w-full" data-name="Container">
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default function PoidsBagage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Poids bagage">
      <Container />
    </div>
  );
}