import svgPaths from "./svg-wk8b3g7avm";

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

function Container1() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___minmax(0,1fr)_0px_minmax(0,1fr)] grid-rows-[_24px] relative shrink-0 w-full" data-name="Container">
      <Svg />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#00ab61] content-stretch flex h-[72px] items-center justify-center py-[16px] relative shrink-0 w-full" data-name="Banner">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 1">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[36px] w-[254.81px]">
        <p className="leading-[56px]">Réservez un vol</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute left-[24px] overflow-clip size-px top-[-96px]" data-name="Container">
      <Heading />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[14px] w-[150.63px]">
        <p className="leading-[20px]">Paris (Orly) - Marrakech</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path clipRule="evenodd" d={svgPaths.p31cc8800} fill="var(--fill-0, #444444)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[54.73px]">
        <p className="leading-[18px]">lun. 15 juin</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3333">
          <path d={svgPaths.p2cdbf280} fill="var(--fill-0, #444444)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Futura:Condensed_Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[18px] items-start relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[150.63px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1eb40fc0} fill="var(--fill-0, #140D8A)" id="Vector" />
          <path d={svgPaths.p33081200} fill="var(--fill-0, #140D8A)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid-cols-[_16px] grid-rows-[_16px] inline-grid relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function ButtonModifierVotreRecherche() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[32px] px-px py-[8px] relative rounded-[999px] shrink-0 w-[32px]" data-name="Button - Modifier votre recherche">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ButtonModifierVotreRecherche />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[17px] relative size-full">
          <Container6 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative size-full">
        <Container5 />
        <BackgroundBorderShadow />
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="SVG">
          <path d={svgPaths.p702df30} fill="var(--fill-0, #00AB61)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.5px] pt-[8px] relative shrink-0" data-name="Margin">
      <Svg4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-[87.37px]">
        <p className="leading-[36px]">Vol aller</p>
      </div>
    </div>
  );
}

function Svg5() {
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

function Container24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-[68.72px]">
        <p className="leading-[20px]">Paris (Orly)</p>
      </div>
      <Container24 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[14px] w-[66.81px]">
        <p className="leading-[20px]">Marrakech</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[3.75px] items-start relative shrink-0 w-[163.53px]" data-name="Container">
      <Heading1 />
      <Heading2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0" data-name="Container">
      <Margin />
      <Container23 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2aa38140} fill="var(--fill-0, #140D8A)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[118.06px]">
        <p className="leading-[20px]">Panorama du mois</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white min-h-[36px] relative rounded-[999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[9px] relative size-full">
        <Container25 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Button />
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1a95f5c0} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg7 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container31 />
      </div>
    </div>
  );
}

function ButtonPeriodePrecedente() {
  return (
    <div className="bg-white content-stretch flex h-[72px] items-center justify-center min-w-[28px] px-[9px] py-[21px] relative rounded-bl-[20px] rounded-tl-[20px] shrink-0 w-[28px]" data-name="Button - Période précédente">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-bl-[20px] rounded-tl-[20px]" />
      <Container30 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[88px] items-start left-0 py-[8px] top-0" data-name="Margin">
      <ButtonPeriodePrecedente />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pdc4ac00} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg8 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function ButtonPeriodeSuivante() {
  return (
    <div className="bg-white content-stretch flex h-[72px] items-center justify-center min-w-[28px] px-[9px] py-[21px] relative rounded-br-[20px] rounded-tr-[20px] shrink-0 w-[28px]" data-name="Button - Période suivante">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-br-[20px] rounded-tr-[20px]" />
      <Container33 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[88px] items-start left-[312px] py-[8px] top-0" data-name="Margin">
      <ButtonPeriodeSuivante />
    </div>
  );
}

function ButtonSam13Juin() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Button - sam. 13 juin">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative size-full">
          <div className="h-[18px] shrink-0 w-[60.89px]" data-name="Rectangle" />
          <div className="h-[28px] shrink-0 w-[43.51px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-w-[60px] pr-px py-px relative shrink-0 w-[94.66px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <ButtonSam13Juin />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] text-center w-[59.2px]">
        <p className="leading-[18px]">dim. 14 juin</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[37.16px]">
        <p className="leading-[28px]">88 €</p>
      </div>
    </div>
  );
}

function ButtonDim14Juin() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Button - dim. 14 juin">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative size-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-w-[60px] pr-px py-px relative shrink-0 w-[94.66px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <ButtonDim14Juin />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[54.73px]">
        <p className="leading-[18px]">lun. 15 juin</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[35.45px]">
        <p className="leading-[28px]">74 €</p>
      </div>
    </div>
  );
}

function ButtonLun15JuinSelectionne() {
  return (
    <div className="bg-[#140d8a] flex-[1_0_0] min-h-px relative w-full" data-name="Button - lun. 15 juin Sélectionné">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-w-[60px] pr-px py-px relative shrink-0 w-[94.66px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <ButtonLun15JuinSelectionne />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] text-center w-[58.95px]">
        <p className="leading-[18px]">mar. 16 juin</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[35.45px]">
        <p className="leading-[28px]">74 €</p>
      </div>
    </div>
  );
}

function ButtonMar16Juin() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Button - mar. 16 juin">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-w-[60px] pr-px py-px relative shrink-0 w-[94.66px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <ButtonMar16Juin />
    </div>
  );
}

function ButtonMer17Juin() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Button - mer. 17 juin">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center justify-center px-[12px] py-[16px] relative size-full">
          <div className="h-[18px] shrink-0 w-[58.45px]" data-name="Rectangle" />
          <div className="h-[28px] shrink-0 w-[37.57px]" data-name="Rectangle" />
        </div>
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center min-w-[60px] pr-px py-px relative shrink-0 w-[94.66px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b border-r border-solid border-t inset-0 pointer-events-none" />
      <ButtonMer17Juin />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex inset-[8px_-94.65px_8px_-5017.33px] items-start pl-[4922.66px]" data-name="Container">
      <Border />
      <Border1 />
      <Border2 />
      <Border3 />
      <Border4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_28px] overflow-clip" data-name="Group">
      <Container36 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <Margin1 />
      <Margin2 />
      <Group />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-299px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+17.85px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[36.7px]">
        <p className="leading-[normal]">Choisi</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-299px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute left-[47.27px] overflow-clip size-px top-[-299px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container48 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[47.27px]">
        <p className="leading-[28px]">06:25</p>
      </div>
      <Container49 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-299px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute left-[48.43px] overflow-clip size-px top-[-299px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container52 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[48.42px]">
        <p className="leading-[28px]">08:50</p>
      </div>
      <Container53 />
    </div>
  );
}

function Container46() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container47 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg10 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container59 />
    </div>
  );
}

function Container55() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container54() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[152.93px]">
        <p className="leading-[18px]">5 billets disponibles à ce prix</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-1 content-stretch flex items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-335px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-[1/span_3] grid-cols-[_152.93px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container61 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[49.04px]">
        <p className="leading-[36px]">98 €</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container65 />
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container45 />
        <Container46 />
        <Container54 />
        <Container60 />
        <Container64 />
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p22815a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg11 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[14px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[33.86px]">
        <p className="leading-[14px]">Choisi</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#00ab61] min-h-[24px] relative rounded-[999px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[8px] py-[4px] relative size-full">
          <Container66 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#00ab61] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[17px] relative size-full">
        <Container44 />
        <Background />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-449px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+36.94px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[74.88px]">
        <p className="leading-[normal]">Sélectionner</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-449px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute left-[48.93px] overflow-clip size-px top-[-449px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container72 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[48.93px]">
        <p className="leading-[28px]">07:00</p>
      </div>
      <Container73 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg12 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-449px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute left-[47.27px] overflow-clip size-px top-[-449px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container76 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[47.27px]">
        <p className="leading-[28px]">09:25</p>
      </div>
      <Container77 />
    </div>
  );
}

function Container70() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container71 />
      <Container74 />
      <Container75 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container81 />
      <Container83 />
    </div>
  );
}

function Container79() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[152.93px]">
        <p className="leading-[18px]">5 billets disponibles à ce prix</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-1 content-stretch flex items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container86 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-485px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="col-[1/span_3] grid-cols-[_152.93px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container85 />
      <Container87 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[54.89px]">
        <p className="leading-[36px]">110 €</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container89 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container69 />
        <Container70 />
        <Container78 />
        <Container84 />
        <Container88 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-567px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+36.94px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[74.88px]">
        <p className="leading-[normal]">Sélectionner</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-567px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute left-[40.59px] overflow-clip size-px top-[-567px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container94 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[40.59px]">
        <p className="leading-[28px]">10:15</p>
      </div>
      <Container95 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg14 />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-567px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute left-[44.36px] overflow-clip size-px top-[-567px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container98 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[44.36px]">
        <p className="leading-[28px]">12:40</p>
      </div>
      <Container99 />
    </div>
  );
}

function Container92() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container93 />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container104 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Container105 />
    </div>
  );
}

function Container101() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container102 />
    </div>
  );
}

function Container100() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container101 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path clipRule="evenodd" d={svgPaths.p186b1a00} fill="var(--fill-0, #CC1800)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Container">
      <Svg16 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Container110 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#cc1800] text-[12px] w-[138.94px]">
        <p className="leading-[18px]">1 billet disponible à ce prix</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container108 />
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-603px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="col-[1/span_3] grid-cols-[_162.94px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container107 />
      <Container112 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[49.04px]">
        <p className="leading-[36px]">98 €</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container114 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container91 />
        <Container92 />
        <Container100 />
        <Container106 />
        <Container113 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-685px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+36.94px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[74.88px]">
        <p className="leading-[normal]">Sélectionner</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-685px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="absolute left-[40.52px] overflow-clip size-px top-[-685px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container119 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[40.52px]">
        <p className="leading-[28px]">11:50</p>
      </div>
      <Container120 />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-685px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute left-[40.17px] overflow-clip size-px top-[-685px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container123 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[40.16px]">
        <p className="leading-[28px]">14:15</p>
      </div>
      <Container124 />
    </div>
  );
}

function Container117() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container118 />
      <Container121 />
      <Container122 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg18 />
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container129 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container130 />
    </div>
  );
}

function Container126() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container127 />
    </div>
  );
}

function Container125() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container126 />
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[152.93px]">
        <p className="leading-[18px]">5 billets disponibles à ce prix</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="col-1 content-stretch flex items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container133 />
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-721px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="col-[1/span_3] grid-cols-[_152.93px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container132 />
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[49.04px]">
        <p className="leading-[36px]">98 €</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container136 />
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container116 />
        <Container117 />
        <Container125 />
        <Container131 />
        <Container135 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-803px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+36.94px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[74.88px]">
        <p className="leading-[normal]">Sélectionner</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-803px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute left-[43.66px] overflow-clip size-px top-[-803px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container141 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[43.66px]">
        <p className="leading-[28px]">12:50</p>
      </div>
      <Container142 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg19 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-803px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute left-[39.39px] overflow-clip size-px top-[-803px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container145 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[39.39px]">
        <p className="leading-[28px]">15:15</p>
      </div>
      <Container146 />
    </div>
  );
}

function Container139() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container140 />
      <Container143 />
      <Container144 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg20 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container151 />
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container150 />
      <Container152 />
    </div>
  );
}

function Container148() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container149 />
    </div>
  );
}

function Container147() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container148 />
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[153.16px]">
        <p className="leading-[18px]">6 billets disponibles à ce prix</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="col-1 content-stretch flex items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container155 />
    </div>
  );
}

function Container156() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-839px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="col-[1/span_3] grid-cols-[_153.16px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container154 />
      <Container156 />
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[54.89px]">
        <p className="leading-[36px]">110 €</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container158 />
    </div>
  );
}

function Container137() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container138 />
        <Container139 />
        <Container147 />
        <Container153 />
        <Container157 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container137 />
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-921px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+36.94px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[74.88px]">
        <p className="leading-[normal]">Sélectionner</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-921px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+66.51px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[134.03px]">
        <p className="leading-[28px]">heure de départ:</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute left-[44.2px] overflow-clip size-px top-[-921px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container163 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[44.2px]">
        <p className="leading-[28px]">19:05</p>
      </div>
      <Container164 />
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37257280} fill="var(--fill-0, #222222)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg21 />
    </div>
  );
}

function Container167() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-921px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+62.83px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[126.65px]">
        <p className="leading-[28px]">{`heure d'arrivée:`}</p>
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="absolute left-[43.74px] overflow-clip size-px top-[-921px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] left-[calc(50%+1.66px)] not-italic text-[#222] text-[18px] text-center top-[13.75px] w-[4.32px]">
        <p className="leading-[28px]">,</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <Container167 />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[18px] text-center w-[43.74px]">
        <p className="leading-[28px]">21:30</p>
      </div>
      <Container168 />
    </div>
  );
}

function Container161() {
  return (
    <div className="col-[1/span_3] content-stretch flex gap-[8px] items-center justify-self-start relative row-1 self-start shrink-0" data-name="Container">
      <Container162 />
      <Container165 />
      <Container166 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p74d970} fill="var(--fill-0, #6A6A6A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1025280} fill="var(--fill-0, #6A6A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Svg22 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] w-[49.67px]">
        <p className="leading-[18px]">3h 25min</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Container172 />
      <Container174 />
    </div>
  );
}

function Container170() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start relative row-1 self-center shrink-0 w-[73.67px]" data-name="Container">
      <Container171 />
    </div>
  );
}

function Container169() {
  return (
    <div className="col-[4/span_2] grid-cols-[_73.67px] grid-rows-[_28px] inline-grid justify-self-end relative row-1 self-start shrink-0" data-name="Container">
      <Container170 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <path clipRule="evenodd" d={svgPaths.p186b1a00} fill="var(--fill-0, #CC1800)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="Container">
      <Svg23 />
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="Container">
      <Container179 />
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0" data-name="Container">
      <Container178 />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#cc1800] text-[12px] w-[152.93px]">
        <p className="leading-[18px]">3 billets disponibles à ce prix</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="col-1 content-stretch flex gap-[8px] items-start justify-end justify-self-start relative row-1 self-center shrink-0" data-name="Container">
      <Container177 />
      <Container180 />
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-957px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[21px] justify-center leading-[0] left-[calc(50%+0.99px)] not-italic text-[13.3px] text-black text-center top-[10.5px] w-[2.98px]">
        <p className="leading-[normal]">,</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="col-[1/span_3] grid-cols-[_176.93px] grid-rows-[_36px] inline-grid justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container176 />
      <Container181 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-center w-[47.26px]">
        <p className="leading-[36px]">74 €</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="col-[4/span_2] content-stretch flex flex-col items-end justify-self-start relative row-2 self-start shrink-0" data-name="Container">
      <Container183 />
    </div>
  );
}

function Container159() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[__28px_36px] relative size-full">
        <Container160 />
        <Container161 />
        <Container169 />
        <Container175 />
        <Container182 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(34,34,34,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container159 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p3ee9ef00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#2464db] content-stretch flex flex-col items-start overflow-clip relative rounded-[999px] shrink-0 size-[20px]" data-name="Background">
      <Svg24 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start pt-[4px] relative shrink-0 w-[20px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function MarginAlignSelfStart() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Margin:align-self-start">
      <Margin3 />
    </div>
  );
}

function Container186() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[6.78px] relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#102e65] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Pas de frais de réservation ! Les horaires</p>
          <p className="leading-[20px] mb-0">sont indiqués en heures locales. Les prix</p>
          <p className="leading-[20px] mb-0">affichés peuvent varier en fonction de la</p>
          <p className="leading-[20px] mb-0">disponibilité du tarif. Le prix définitif du</p>
          <p className="leading-[20px] mb-0">{`billet s'affiche dès que vous commencez la`}</p>
          <p className="leading-[20px]">procédure de paiement.</p>
        </div>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Container">
      <Container186 />
    </div>
  );
}

function Container184() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[16px] relative size-full">
          <MarginAlignSelfStart />
          <Container185 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e7f0fe] h-[154px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#bcd2fb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-px relative size-full">
          <Container184 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container21 />
        <Container28 />
        <Container43 />
        <BackgroundBorder />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[25px] relative size-full">
          <Container20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(34,34,34,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[32px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 py-[24px] right-0 top-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] w-[49.22px]">
        <p className="leading-[24px]">Retour</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container189 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex items-start min-h-[40px] px-[21px] py-[9px] relative rounded-[999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <Container188 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[24px] right-0 top-[1475px]" data-name="Background">
      <Container187 />
    </div>
  );
}

function Container193() {
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

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Svg25() {
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
      <Svg25 />
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Container">
      <ButtonDetails />
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex gap-[8px] h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container195 />
      <Container196 />
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[93.56px]" data-name="Container">
      <Container193 />
      <Container194 />
    </div>
  );
}

function Container198() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Svg26() {
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

function Container199() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg26 />
    </div>
  );
}

function Container197() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container198 />
      <Container199 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e20076] content-stretch flex flex-col items-start min-h-[48px] px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Button">
      <Container197 />
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative self-stretch" data-name="Container">
      <Container192 />
      <Button7 />
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[12px] relative size-full">
        <Container191 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px px-[24px] right-0 top-[635px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container190 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#f7f7f7] h-[1549px] relative shrink-0 w-full" data-name="Main">
      <Container2 />
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

function Container200() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-1662px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <List />
        <Container200 />
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

export default function ChoixDuVol() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Choix du vol">
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}