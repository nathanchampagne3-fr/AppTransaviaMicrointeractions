import svgPaths from "./svg-4dszqtdgns";
import imgImage2 from "./a9299df3224e2bfa8306255e1515adcbe163b3b7.png";

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

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Bagage détecté :</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-[61.56px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#222] text-[18px] top-[13.75px] whitespace-nowrap">
        <p className="leading-[28px]">Cabine (+20€)</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[88px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Svg1() {
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

function Container11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e20076] content-stretch flex flex-col items-start min-h-[48px] px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Button">
      <Container9 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative self-stretch" data-name="Container">
      <Container5 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[12px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pt-px px-[24px] top-[707px] w-[390px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[780px] right-0 top-0" data-name="Container">
      <Banner />
      <BackgroundHorizontalBorder />
      <div className="absolute h-[521px] left-0 top-[72px] w-[390px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function DimmensionDetectee() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[239px] px-[4px] py-[2px] rounded-[4px] top-[439px]" data-name="Dimmension détectée">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center whitespace-nowrap">
        <p className="leading-[24px]">56cm</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[196px] top-[321px]">
      <div className="absolute h-[263px] left-[223px] top-[321px] w-0">
        <div className="absolute inset-[-0.57%_-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 266">
            <path d="M1.5 1.5V264.5" id="Vector 5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[196px] top-[321px] w-[54.5px]">
        <div className="absolute inset-[-1.5px_-2.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.5 3">
            <path d="M1.5 1.5H56" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[196px] top-[584px] w-[54.5px]">
        <div className="absolute inset-[-1.5px_-2.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57.5 3">
            <path d="M1.5 1.5H56" id="Vector 6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <DimmensionDetectee />
    </div>
  );
}

export default function MesureBagae() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }} data-name="Mesure Bagae">
      <Container />
      <div className="-translate-x-1/2 absolute left-1/2 size-[64px] top-[616px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, white)" id="Ellipse 2" r="30.5" stroke="var(--stroke-0, #140D8A)" strokeWidth="3" />
        </svg>
      </div>
      <Group />
    </div>
  );
}