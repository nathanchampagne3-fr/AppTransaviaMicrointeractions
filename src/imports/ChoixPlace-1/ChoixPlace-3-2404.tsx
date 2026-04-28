import svgPaths from "./svg-98q7xohpo8";
import imgImage from "./355d72d738e44deae63cc0af27e760e7b95dfe7a.png";
import imgImage1 from "./ea5b43d8d39bd9f4c001d27baa9a151e89b6daed.png";
import imgImage2 from "./23ed6cbb0efb2a15773afb54850dbb2e0775e466.png";
import imgImage3 from "./abfd8ff07fc24b5ba22a91009dc6d8c149294f5c.png";
import imgImage4 from "./375d7bfff495947d21fb170a1e1888261122f146.png";
import imgImage5 from "./f3a287c10668d01a05a49e077d4bcd17b3b8ebc1.png";
import imgBackground from "./1d2bba28de1fb8a5d1040c26185662062835adc8.png";
import imgItem from "./52f2b7243daaa109dc1cad37c9ea57a5004b18cb.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[374px]" data-name="Heading 1">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-[292.02px]">
        <p className="leading-[36px]">{`Où voulez-vous être assis? `}</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-full">
        <p className="leading-[30px] mb-0">Réservez votre siège préféré</p>
        <p className="leading-[30px]">dès maintenant</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Le prix peut être plus élevé après le paiement</p>
        <p className="leading-[24px] mb-0">{`de la réservation. Si vous n'en réservez pas, un`}</p>
        <p className="leading-[24px] mb-0">siège vous sera attribué aléatoirement à</p>
        <p className="leading-[24px]">{`l'enregistrement.`}</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[16px] py-[12px] relative size-full">
        <Heading1 />
        <Container1 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px]">Première rangée 27 €</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[40px] pb-[18.8px] pl-[44px] pr-[8px] pt-[3.2px] right-[170px] top-0" data-name="Item">
      <Container3 />
      <Image />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px] mb-0">Plus d’espace pour les</p>
        <p className="leading-[18px]">jambes 19 €</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[170px] min-h-[40px] pb-[0.8px] pl-[44px] pt-[3.2px] right-0 top-0" data-name="Item">
      <Container4 />
      <Image1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px]">{`A l'avant 19 €`}</p>
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[40px] pb-[18.8px] pl-[44px] pr-[8px] pt-[3.2px] right-[170px] top-[48px]" data-name="Item">
      <Container5 />
      <Image2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px]">{`Standard - à l'avant 14 €`}</p>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[170px] min-h-[40px] pb-[18.8px] pl-[44px] pt-[3.2px] right-0 top-[48px]" data-name="Item">
      <Container6 />
      <Image3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px]">Standard 11 €</p>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[40px] pb-[18.8px] pl-[44px] pr-[8px] pt-[3.2px] right-[170px] top-[96px]" data-name="Item">
      <Container7 />
      <Image4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[12px] w-full">
        <p className="leading-[18px]">Indisponible</p>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[36px]" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 min-h-[40px] pb-[18.8px] pl-[44px] pt-[3.2px] right-0 top-[96px]" data-name="Item">
      <Container8 />
      <Image5 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[144px] relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <List />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute left-[1.99px] size-[20.016px] top-[-6.32px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0156 20.0156">
          <path d={svgPaths.p3152cf90} fill="var(--fill-0, #00AB61)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[30px] justify-center leading-[0] left-[24px] not-italic text-[#222] text-[24px] top-[15px] w-[92.21px]">
        <p className="leading-[30px]">{` Vol aller`}</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] pt-[12px] px-[16px] relative size-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[normal]">{`Standard - à l'avant 11A`}</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pr-[80px] relative size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[25.5px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[156.82px]">
          <p className="leading-[normal]">Nathan CHAMPAGNE</p>
        </div>
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-0 top-[8px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[66.8px]">
        <p className="leading-[normal]">14,00 €</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full" data-name="Button">
      <Container9 />
      <Container11 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#140d8a] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] px-[16px] relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background3 />
        <Background4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start mb-[-235px] min-h-px relative shrink-0 w-full z-[2]" data-name="Container">
      <Border1 />
      <Border2 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pt-[25px] relative shrink-0 w-[33.99px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[8.3px]">
        <p className="leading-[18px]">A</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pt-[25px] relative shrink-0 w-[33.99px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.67px]">
        <p className="leading-[18px]">B</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pt-[25px] relative shrink-0 w-[33.99px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.91px]">
        <p className="leading-[18px]">C</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pl-[30.01px] pt-[25px] relative shrink-0 w-[64px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[8.41px]">
        <p className="leading-[18px]">D</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pt-[25px] relative shrink-0 w-[33.99px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.14px]">
        <p className="leading-[18px]">E</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col h-[51.99px] items-center pt-[25px] relative shrink-0 w-[33.99px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.98px]">
        <p className="leading-[18px]">F</p>
      </div>
    </div>
  );
}

function ItemOrderedList() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item6 />
      <Item7 />
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label1 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label2 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[4.52px]">
        <p className="leading-[18px]">1</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item16() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label3 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item17() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label4 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[24.55px]">
        <p className="leading-[21px]">27€</p>
      </div>
    </div>
  );
}

function Item18() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage} />
      </div>
      <Label5 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList1() {
  return (
    <div className="content-stretch flex items-start pr-[3px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item12 />
      <Item13 />
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label6 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label7 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label8 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.71px]">
        <p className="leading-[18px]">2</p>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item23() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label9 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item24() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label10 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item25() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label11 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList2() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item19 />
      <Item20 />
      <Item21 />
      <Item22 />
      <Item23 />
      <Item24 />
      <Item25 />
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item26() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label12 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item27() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label13 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label14() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item28() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label14 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.84px]">
        <p className="leading-[18px]">3</p>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item30() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label15 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label16() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item31() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label16 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item32() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label17 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList3() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item26 />
      <Item27 />
      <Item28 />
      <Item29 />
      <Item30 />
      <Item31 />
      <Item32 />
    </div>
  );
}

function Label18() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item33() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label18 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label19() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item34() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label19 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label20() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item35() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label20 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item36() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.23px]">
        <p className="leading-[18px]">4</p>
      </div>
    </div>
  );
}

function Label21() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item37() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label21 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label22() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item38() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label22 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label23() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item39() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label23 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList4() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item33 />
      <Item34 />
      <Item35 />
      <Item36 />
      <Item37 />
      <Item38 />
      <Item39 />
    </div>
  );
}

function Label24() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item40() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label24 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label25() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item41() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label25 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label26() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item42() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label26 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item43() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.84px]">
        <p className="leading-[18px]">5</p>
      </div>
    </div>
  );
}

function Label27() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item44() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label27 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label28() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item45() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label28 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item46() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage2} />
      </div>
      <Label29 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList5() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item40 />
      <Item41 />
      <Item42 />
      <Item43 />
      <Item44 />
      <Item45 />
      <Item46 />
    </div>
  );
}

function Label30() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item47() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label30 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label31() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item48() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label31 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item49() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item50() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.07px]">
        <p className="leading-[18px]">6</p>
      </div>
    </div>
  );
}

function Item51() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Label32() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item52() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label32 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item53() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function ItemOrderedList6() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item47 />
      <Item48 />
      <Item49 />
      <Item50 />
      <Item51 />
      <Item52 />
      <Item53 />
    </div>
  );
}

function Label33() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item54() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label33 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label34() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item55() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label34 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label35() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item56() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label35 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item57() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[6.4px]">
        <p className="leading-[18px]">7</p>
      </div>
    </div>
  );
}

function Label36() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item58() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label36 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item59() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item60() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function ItemOrderedList7() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item54 />
      <Item55 />
      <Item56 />
      <Item57 />
      <Item58 />
      <Item59 />
      <Item60 />
    </div>
  );
}

function Label37() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item61() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label37 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label38() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item62() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label38 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label39() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item63() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label39 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item64() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.18px]">
        <p className="leading-[18px]">8</p>
      </div>
    </div>
  );
}

function Label40() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item65() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label40 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label41() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item66() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label41 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label42() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item67() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label42 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList8() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item61 />
      <Item62 />
      <Item63 />
      <Item64 />
      <Item65 />
      <Item66 />
      <Item67 />
    </div>
  );
}

function Label43() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item68() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label43 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label44() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item69() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label44 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label45() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item70() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label45 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item71() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[7.07px]">
        <p className="leading-[18px]">9</p>
      </div>
    </div>
  );
}

function Label46() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item72() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label46 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label47() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item73() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label47 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item74() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function ItemOrderedList9() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item68 />
      <Item69 />
      <Item70 />
      <Item71 />
      <Item72 />
      <Item73 />
      <Item74 />
    </div>
  );
}

function Label48() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item75() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label48 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label49() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item76() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label49 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label50() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item77() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label50 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item78() {
  return (
    <div className="h-[39px] mr-[-3px] relative shrink-0 w-[33px]" data-name="Item">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 39">
        <g id="Item">
          <path d={svgPaths.p2a407940} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Label51() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item79() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label51 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label52() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item80() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label52 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label53() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item81() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label53 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList10() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item75 />
      <Item76 />
      <Item77 />
      <Item78 />
      <Item79 />
      <Item80 />
      <Item81 />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[44px] relative shrink-0 w-[26.31px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.3104 44">
        <g clipPath="url(#clip0_1_7899)" id="SVG">
          <path d={svgPaths.p31695280} fill="var(--fill-0, #90A3B7)" id="Vector" />
          <path d={svgPaths.p19871000} fill="var(--fill-0, #1D3E59)" id="Vector_2" />
          <path d={svgPaths.p3bd39480} fill="var(--fill-0, #5E40B8)" id="Vector_3" />
          <path d={svgPaths.p28e5da00} fill="var(--fill-0, #949FA8)" id="Vector_4" />
          <path d={svgPaths.p1e935400} fill="var(--fill-0, #294670)" id="Vector_5" />
          <path d={svgPaths.p561a850} fill="var(--fill-0, #2800A0)" id="Vector_6" />
          <path d={svgPaths.p73eadc0} fill="var(--fill-0, #D1A995)" id="Vector_7" />
          <path d={svgPaths.p27c58b8c} fill="var(--fill-0, #FF3268)" id="Vector_8" />
          <path d={svgPaths.pad9ce0} fill="var(--fill-0, #DDB7A6)" id="Vector_9" />
          <path d={svgPaths.p2fc4be00} fill="var(--fill-0, #CA2B55)" id="Vector_10" />
          <path d={svgPaths.p1ae9980} fill="var(--fill-0, black)" id="Vector_11" opacity="0.2" />
          <path d={svgPaths.p11779a20} fill="var(--fill-0, #D1A995)" id="Vector_12" />
          <path d={svgPaths.pfcef580} fill="var(--fill-0, #DDB7A6)" id="Vector_13" />
          <path d={svgPaths.pda59400} fill="var(--fill-0, #543324)" id="Vector_14" />
          <path d={svgPaths.p15a4dfe0} fill="var(--fill-0, #5E3A28)" id="Vector_15" />
          <path d={svgPaths.p267b3c00} fill="var(--fill-0, black)" id="Vector_16" opacity="0.2" />
          <path d={svgPaths.p108f6980} fill="var(--fill-0, black)" id="Vector_17" opacity="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_7899">
            <rect fill="white" height="44" width="26.3104" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[44px] items-center justify-center left-[2px] overflow-clip top-[-8px] w-[32px]" data-name="Image">
      <Svg />
    </div>
  );
}

function Item82() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
      <Image6 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label54() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item83() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label54 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label55() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item84() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label55 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item85() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">11</p>
      </div>
    </div>
  );
}

function Label56() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item86() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label56 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label57() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item87() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label57 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label58() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[14px] text-center w-[23.34px]">
        <p className="leading-[21px]">14€</p>
      </div>
    </div>
  );
}

function Item88() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage3} />
      </div>
      <Label58 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList11() {
  return (
    <div className="content-stretch flex items-start pr-[3px] py-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item82 />
      <Item83 />
      <Item84 />
      <Item85 />
      <Item86 />
      <Item87 />
      <Item88 />
    </div>
  );
}

function Label59() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item89() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label59 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label60() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item90() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label60 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label61() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item91() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label61 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item92() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">12</p>
      </div>
    </div>
  );
}

function Label62() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item93() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label62 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label63() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item94() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label63 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label64() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item95() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label64 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList12() {
  return (
    <div className="content-stretch flex items-start pb-[12px] pr-[3px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item89 />
      <Item90 />
      <Item91 />
      <Item92 />
      <Item93 />
      <Item94 />
      <Item95 />
    </div>
  );
}

function Label65() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item96() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label65 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label66() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item97() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label66 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label67() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item98() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label67 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item99() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.26px]">
        <p className="leading-[18px]">13</p>
      </div>
    </div>
  );
}

function Label68() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item100() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label68 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label69() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item101() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label69 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label70() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[23.12px]">
        <p className="leading-[21px]">19€</p>
      </div>
    </div>
  );
}

function Item102() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.25%] left-0 max-w-none top-[-0.63%] w-full" src={imgImage1} />
      </div>
      <Label70 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList13() {
  return (
    <div className="content-stretch flex items-start pr-[3px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item96 />
      <Item97 />
      <Item98 />
      <Item99 />
      <Item100 />
      <Item101 />
      <Item102 />
    </div>
  );
}

function Label71() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item103() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label71 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label72() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item104() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label72 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label73() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item105() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label73 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item106() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.72px]">
        <p className="leading-[18px]">14</p>
      </div>
    </div>
  );
}

function Label74() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item107() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label74 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label75() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item108() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label75 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label76() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item109() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label76 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList14() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item103 />
      <Item104 />
      <Item105 />
      <Item106 />
      <Item107 />
      <Item108 />
      <Item109 />
    </div>
  );
}

function Label77() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item110() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label77 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label78() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item111() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label78 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label79() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item112() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label79 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item113() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">15</p>
      </div>
    </div>
  );
}

function Label80() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item114() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label80 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label81() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item115() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label81 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label82() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item116() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label82 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList15() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item110 />
      <Item111 />
      <Item112 />
      <Item113 />
      <Item114 />
      <Item115 />
      <Item116 />
    </div>
  );
}

function Label83() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item117() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label83 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label84() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item118() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label84 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label85() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item119() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label85 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item120() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.59px]">
        <p className="leading-[18px]">16</p>
      </div>
    </div>
  );
}

function Label86() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item121() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label86 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label87() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item122() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label87 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label88() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item123() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label88 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList16() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item117 />
      <Item118 />
      <Item119 />
      <Item120 />
      <Item121 />
      <Item122 />
      <Item123 />
    </div>
  );
}

function Label89() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item124() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label89 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label90() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item125() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label90 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label91() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item126() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label91 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item127() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">17</p>
      </div>
    </div>
  );
}

function Label92() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item128() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label92 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label93() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item129() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label93 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label94() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item130() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label94 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList17() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item124 />
      <Item125 />
      <Item126 />
      <Item127 />
      <Item128 />
      <Item129 />
      <Item130 />
    </div>
  );
}

function Label95() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item131() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label95 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label96() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item132() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label96 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label97() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item133() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label97 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item134() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.7px]">
        <p className="leading-[18px]">18</p>
      </div>
    </div>
  );
}

function Label98() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item135() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label98 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label99() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item136() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label99 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label100() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item137() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label100 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList18() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item131 />
      <Item132 />
      <Item133 />
      <Item134 />
      <Item135 />
      <Item136 />
      <Item137 />
    </div>
  );
}

function Label101() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item138() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label101 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label102() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item139() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label102 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label103() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item140() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label103 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item141() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.59px]">
        <p className="leading-[18px]">19</p>
      </div>
    </div>
  );
}

function Label104() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item142() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label104 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label105() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item143() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label105 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label106() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item144() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label106 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList19() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item138 />
      <Item139 />
      <Item140 />
      <Item141 />
      <Item142 />
      <Item143 />
      <Item144 />
    </div>
  );
}

function Item145() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item146() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item147() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item148() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[14.12px]">
        <p className="leading-[18px]">20</p>
      </div>
    </div>
  );
}

function Label107() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item149() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label107 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label108() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item150() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label108 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label109() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item151() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label109 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList20() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item145 />
      <Item146 />
      <Item147 />
      <Item148 />
      <Item149 />
      <Item150 />
      <Item151 />
    </div>
  );
}

function Item152() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item153() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item154() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item155() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[11.23px]">
        <p className="leading-[18px]">21</p>
      </div>
    </div>
  );
}

function Label110() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item156() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label110 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label111() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item157() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label111 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label112() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item158() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label112 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList21() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item152 />
      <Item153 />
      <Item154 />
      <Item155 />
      <Item156 />
      <Item157 />
      <Item158 />
    </div>
  );
}

function Item159() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item160() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item161() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item162() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.42px]">
        <p className="leading-[18px]">22</p>
      </div>
    </div>
  );
}

function Label113() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item163() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label113 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label114() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item164() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label114 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label115() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item165() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label115 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList22() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item159 />
      <Item160 />
      <Item161 />
      <Item162 />
      <Item163 />
      <Item164 />
      <Item165 />
    </div>
  );
}

function Item166() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item167() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item168() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item169() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.45px]">
        <p className="leading-[18px]">23</p>
      </div>
    </div>
  );
}

function Label116() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item170() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label116 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label117() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item171() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label117 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label118() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item172() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label118 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList23() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item166 />
      <Item167 />
      <Item168 />
      <Item169 />
      <Item170 />
      <Item171 />
      <Item172 />
    </div>
  );
}

function Item173() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item174() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item175() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item176() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.61px]">
        <p className="leading-[18px]">24</p>
      </div>
    </div>
  );
}

function Label119() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item177() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label119 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label120() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item178() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label120 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label121() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item179() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label121 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList24() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item173 />
      <Item174 />
      <Item175 />
      <Item176 />
      <Item177 />
      <Item178 />
      <Item179 />
    </div>
  );
}

function Item180() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item181() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item182() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item183() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">25</p>
      </div>
    </div>
  );
}

function Label122() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item184() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label122 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label123() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item185() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label123 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label124() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item186() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label124 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList25() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item180 />
      <Item181 />
      <Item182 />
      <Item183 />
      <Item184 />
      <Item185 />
      <Item186 />
    </div>
  );
}

function Label125() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item187() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label125 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label126() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item188() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label126 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label127() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item189() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label127 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item190() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.71px]">
        <p className="leading-[18px]">26</p>
      </div>
    </div>
  );
}

function Label128() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item191() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label128 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label129() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item192() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label129 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label130() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item193() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label130 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList26() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item187 />
      <Item188 />
      <Item189 />
      <Item190 />
      <Item191 />
      <Item192 />
      <Item193 />
    </div>
  );
}

function Item194() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item195() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Label131() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item196() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label131 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item197() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.14px]">
        <p className="leading-[18px]">27</p>
      </div>
    </div>
  );
}

function Label132() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item198() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label132 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label133() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item199() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label133 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label134() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item200() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label134 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList27() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item194 />
      <Item195 />
      <Item196 />
      <Item197 />
      <Item198 />
      <Item199 />
      <Item200 />
    </div>
  );
}

function Label135() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item201() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label135 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label136() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item202() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label136 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label137() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item203() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label137 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item204() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.79px]">
        <p className="leading-[18px]">28</p>
      </div>
    </div>
  );
}

function Label138() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item205() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label138 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label139() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item206() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label139 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label140() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item207() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label140 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList28() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item201 />
      <Item202 />
      <Item203 />
      <Item204 />
      <Item205 />
      <Item206 />
      <Item207 />
    </div>
  );
}

function Label141() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item208() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label141 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label142() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item209() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label142 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label143() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item210() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label143 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Item211() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[13.78px]">
        <p className="leading-[18px]">29</p>
      </div>
    </div>
  );
}

function Label144() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_0_3px] items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item212() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label144 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%+1px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label145() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item213() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label145 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function Label146() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center min-h-[25px] pt-[4px]" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[21px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[20.25px]">
        <p className="leading-[21px]">11€</p>
      </div>
    </div>
  );
}

function Item214() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage4} />
      </div>
      <Label146 />
      <div className="-translate-x-1/2 absolute bg-white border border-[#767676] border-solid bottom-[4px] left-[calc(50%-0.5px)] opacity-0 rounded-[50px] size-[13px]" data-name="Input" />
    </div>
  );
}

function ItemOrderedList29() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item208 />
      <Item209 />
      <Item210 />
      <Item211 />
      <Item212 />
      <Item213 />
      <Item214 />
    </div>
  );
}

function Item215() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item216() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item217() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item218() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[14.25px]">
        <p className="leading-[18px]">30</p>
      </div>
    </div>
  );
}

function Item219() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item220() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item221() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function ItemOrderedList30() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item215 />
      <Item216 />
      <Item217 />
      <Item218 />
      <Item219 />
      <Item220 />
      <Item221 />
    </div>
  );
}

function Item222() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item223() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item224() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item225() {
  return (
    <div className="content-stretch flex flex-col h-[39px] items-center mr-[-3px] pl-[3px] pt-[10px] relative shrink-0 w-[33px]" data-name="Item">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[18px]">31</p>
      </div>
    </div>
  );
}

function Item226() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[39px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item227() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function Item228() {
  return (
    <div className="h-[40px] mr-[-3px] relative shrink-0 w-[36px]" data-name="Item">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage5} />
      </div>
    </div>
  );
}

function ItemOrderedList31() {
  return (
    <div className="content-stretch flex items-start pr-[3px] pt-[12px] relative shrink-0 w-full" data-name="Item → Ordered List">
      <Item222 />
      <Item223 />
      <Item224 />
      <Item225 />
      <Item226 />
      <Item227 />
      <Item228 />
    </div>
  );
}

function OrderedList() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Ordered List">
      <ItemOrderedList />
      <ItemOrderedList1 />
      <ItemOrderedList2 />
      <ItemOrderedList3 />
      <ItemOrderedList4 />
      <ItemOrderedList5 />
      <ItemOrderedList6 />
      <ItemOrderedList7 />
      <ItemOrderedList8 />
      <ItemOrderedList9 />
      <ItemOrderedList10 />
      <ItemOrderedList11 />
      <div className="h-[20px] relative shrink-0 w-[234px]" data-name="Item">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[74.84%] left-0 max-w-none top-0 w-full" src={imgItem} />
        </div>
      </div>
      <ItemOrderedList12 />
      <div className="h-[20px] relative shrink-0 w-[234px]" data-name="Item">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[74.84%] left-0 max-w-none top-0 w-full" src={imgItem} />
        </div>
      </div>
      <ItemOrderedList13 />
      <ItemOrderedList14 />
      <ItemOrderedList15 />
      <ItemOrderedList16 />
      <ItemOrderedList17 />
      <ItemOrderedList18 />
      <ItemOrderedList19 />
      <ItemOrderedList20 />
      <ItemOrderedList21 />
      <ItemOrderedList22 />
      <ItemOrderedList23 />
      <ItemOrderedList24 />
      <ItemOrderedList25 />
      <ItemOrderedList26 />
      <ItemOrderedList27 />
      <ItemOrderedList28 />
      <ItemOrderedList29 />
      <ItemOrderedList30 />
      <ItemOrderedList31 />
    </div>
  );
}

function Background5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[36px] pt-[348px] relative shrink-0 w-[306px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[127.99%] left-0 max-w-none top-0 w-full" src={imgBackground} />
      </div>
      <OrderedList />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-235px] min-h-px relative shrink-0 w-full z-[1]" data-name="Container">
      <Background5 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col isolate items-start pb-[235px] relative shrink-0 w-full" data-name="Section">
      <Container2 />
      <Container12 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] pt-[16px] px-[8px] relative size-full">
        <Border />
        <Section />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] w-[34.8px]">
        <p className="leading-[24px]">Total</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-right w-[89.05px]">
        <p className="leading-[24px]">112,00 €</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Link() {
  return (
    <div className="h-[33.5px] min-h-[24px] min-w-[24px] relative rounded-[999px] shrink-0 w-[87.66px]" data-name="Link">
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[25.5px] justify-center leading-[0] left-[8px] not-italic text-[#444] text-[16px] top-[16.75px] w-[53.66px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">{`Détails `}</p>
      </div>
      <div className="absolute h-[6px] left-[65.91px] top-[8.92px] w-[9.492px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.49219 6">
          <path d={svgPaths.p2a253a0} fill="var(--fill-0, #444444)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between px-[8px] py-[12px] relative size-full">
        <Container14 />
        <Container18 />
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer → Section">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container13 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center min-h-[24px] min-w-[24px] pb-[9px] pt-[7.4px] px-[17px] relative rounded-[999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] text-center w-[49.22px]">
        <p className="leading-[24px]">Retour</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-start justify-center left-[calc(50%-14.12px)] py-[0.75px] top-[calc(50%-1.25px)]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-0 left-[84.01px] top-[20.29px] w-[20px]" data-name="Container">
      <div className="absolute inset-[-18.23px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.2344">
          <g id="Container">
            <path d={svgPaths.p5cddac0} fill="var(--fill-0, white)" id="Symbol" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e20076] h-[40px] min-h-[24px] min-w-[24px] relative rounded-[999px] shrink-0 w-[130.51px]" data-name="Button">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[160.27px] items-start max-w-[inherit] px-[8px] relative size-full">
        <Link1 />
        <Button1 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-full" data-name="Background">
      <Container19 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[16px] relative shrink-0 w-full" data-name="Form">
      <Heading />
      <Container />
      <FooterSection />
      <Background6 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#a8bcd7] content-stretch flex flex-col items-start left-0 pb-[0.09px] pt-[40px] right-0 top-[40px]" data-name="Background">
      <Form />
    </div>
  );
}

function Item229() {
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

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item229 />
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

function Container22() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-2699.99px]" data-name="Container">
      <Heading3 />
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <List1 />
        <Container22 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[41px] px-[24px] right-0 top-[2658.99px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <Nav />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[38.733px] relative shrink-0 w-[166px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 38.7333">
        <g id="SVG">
          <path d={svgPaths.p1011be0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LogoTransavia() {
  return (
    <div className="aspect-[166/38.72999954223633] content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Logo Transavia">
      <Svg1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <LogoTransavia />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#00ab61] content-stretch flex flex-col h-[72px] items-start left-0 pb-[15.27px] pt-[18px] px-[16px] right-0 top-0" data-name="Header">
      <Container23 />
    </div>
  );
}

export default function ChoixPlace() {
  return (
    <div className="bg-white relative size-full" data-name="Choix place">
      <Background />
      <Footer />
      <Header />
    </div>
  );
}