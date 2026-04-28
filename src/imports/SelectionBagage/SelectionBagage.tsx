import svgPaths from "./svg-cxvtvwzydn";

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

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-full">
          <p className="leading-[36px]">Bagages cabine</p>
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[20px] w-full">
        <p className="leading-[32px]">Voici ce que vous emportez à bord</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Mesurer mon bagage</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e20076] min-h-[48px] relative rounded-[999px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function LabelInput() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="Label → Input">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[999px] size-[24px] top-1/2" data-name="Input:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_#8c8c8c]" />
      </div>
      <div className="bg-[#00ab61] rounded-[999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[115.83px]">
        <p className="leading-[24px]">1 bagage à main</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <LabelInput />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#02391e] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Inclus</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e7f3ee] content-stretch flex items-center min-h-[24px] px-[9px] py-[5px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#afd9c5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[24px] pt-[2px] relative size-full">
        <BackgroundBorder />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[12px] pt-[4px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-full">
        <p className="leading-[20px] mb-0">1 bagage à main par passager</p>
        <p className="leading-[20px] mb-0">Max. 40 x 30 x 20 cm</p>
        <p className="leading-[20px] mb-0">Placez-le sous le siège devant</p>
        <p className="leading-[20px]">{`vous `}</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[36px] pt-[16px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container14 />
      <Margin />
      <Margin1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[42px]" data-name="SVG">
      <div className="absolute inset-[61.29%_31.44%_20.27%_31.75%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.463 7.74375">
          <path d={svgPaths.p24e557b0} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.33%_17.79%_8.33%_18.1%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9266 35">
          <path clipRule="evenodd" d={svgPaths.pa9b0bd0} fill="var(--fill-0, #00AB61)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.07%_8.34%_32.09%_8.34%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.9958 19.6716">
          <path d={svgPaths.p16f03000} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[42px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function ContainerAlignFlexStart() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Container:align-flex-start">
      <Container19 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <div className="flex flex-row items-center self-stretch">
        <ContainerAlignFlexStart />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white h-[184px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LabelInput1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="Label → Input">
      <div className="-translate-y-1/2 absolute left-0 pointer-events-none rounded-[999px] size-[24px] top-1/2" data-name="Input:shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[999px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_1px_#8c8c8c]" />
      </div>
      <div className="bg-white rounded-[999px] shrink-0 size-[12px]" data-name="Background" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[3.8px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[202.2px]">
        <p className="leading-[24px] mb-0">1 bagage cabine et 1 bagage</p>
        <p className="leading-[24px]">à main</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <LabelInput1 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-full">
        <p className="leading-[20px] mb-0">1 bagage à main (dimensions</p>
        <p className="leading-[20px] mb-0">max. 40 x 30 x 20 cm)</p>
        <p className="leading-[20px] mb-0">1 bagage cabine (dimensions</p>
        <p className="leading-[20px] mb-0">max. 55 x 40 x 25 cm)</p>
        <p className="leading-[20px] mb-0">Max. 10 kg au total</p>
        <p className="leading-[20px]">Embarquement prioritaire inclus</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-full">
        <p className="mb-0">
          <span className="leading-[20px]">À partir de</span>
          <span className="font-['SF_Compact_Rounded:Regular',sans-serif] leading-[20px] not-italic text-[#6a6a6a]">{` `}</span>
          <span className="leading-[20px]">37,99 €</span>
          <span className="font-['SF_Compact_Rounded:Regular',sans-serif] leading-[20px] not-italic text-[#6a6a6a]">{` par personne`}</span>
        </p>
        <p className="font-['SF_Compact_Rounded:Regular',sans-serif] leading-[20px] text-[#6a6a6a]">et par aller simple</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pl-[12px] pt-[16px] relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container24 />
      <Margin2 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[48px]" data-name="SVG">
      <div className="absolute inset-[73.44%_22.2%_8.34%_13.53%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.8537 8.749">
          <path d={svgPaths.p3855b6c0} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.66%_14%_8.33%_47.53%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4629 24.004">
          <path clipRule="evenodd" d={svgPaths.p11459e40} fill="var(--fill-0, #00AB61)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.69%_45.78%_21.15%_8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.026 25.994">
          <path d={svgPaths.p2b133b80} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[8.33%_8.33%_22.59%_18.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2336 33.1567">
          <path d={svgPaths.p82372c0} fill="var(--fill-0, #00AB61)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function ContainerAlignFlexStart1() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Container:align-flex-start">
      <Container29 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <div className="flex flex-row items-center self-stretch">
        <ContainerAlignFlexStart1 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white h-[270px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[23.04px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-[293.73px]">
        <p className="leading-[20px] mb-0">{`Plus d'informations concernant le transport des`}</p>
        <p className="leading-[20px]">bagages cabine</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p18e25e80} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonEnSavoirPlusSurLesBagagesCabine() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative rounded-[999px] shrink-0 w-[19.23px]" data-name="Button - En savoir plus sur les bagages cabine">
      <Svg3 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <ButtonEnSavoirPlusSurLesBagagesCabine />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container31 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading />
      <Button />
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Section />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white h-[696px] relative shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(32,32,32,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(34,34,34,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <BackgroundBorderShadow />
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] w-[49.22px]">
        <p className="leading-[24px]">Retour</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex items-start min-h-[40px] px-[21px] py-[9px] relative rounded-[999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Container34 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] right-0 top-[825px]" data-name="Background">
      <Container33 />
    </div>
  );
}

function Container41() {
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
    <div className="font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] leading-[0] not-italic relative shrink-0 text-[#222] w-[61.56px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-0 text-[18px] top-[13.75px] w-[25.77px]">
        <p className="leading-[28px]">98,</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-[25.77px] text-[16px] top-[12px] w-[20.45px]">
        <p className="leading-[24px]">00</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[28px] justify-center left-[49.86px] text-[18px] top-[14px] w-[11.7px]">
        <p className="leading-[28px]">€</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Svg4() {
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
      <Svg4 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <ButtonDetails />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93.56px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Svg5() {
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

function Container47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e20076] content-stretch flex flex-col items-start min-h-[48px] px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Button">
      <Container45 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative self-stretch" data-name="Container">
      <Container40 />
      <Button1 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[12px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px px-[24px] right-0 top-[635px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f7f7f7] h-[899px] relative shrink-0 w-full" data-name="Main">
      <Container3 />
      <Background />
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

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[36px] w-[106.49px]">
        <p className="leading-[56px]">Footer</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-1012px]" data-name="Container">
      <Heading1 />
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <List />
        <Container48 />
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

export default function SelectionBagage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Selection bagage">
      <Container />
    </div>
  );
}