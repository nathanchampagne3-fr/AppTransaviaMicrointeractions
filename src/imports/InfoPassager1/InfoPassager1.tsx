import svgPaths from "./svg-jev6cd79wh";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[374px]" data-name="Heading 1">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] w-[113.59px]">
        <p className="leading-[36px]">Passagers</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[20px] w-full">
        <p className="leading-[26px]">Passager 1 (Adulte)</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative size-full">
        <Heading2 />
        <div className="absolute h-[10px] left-[2.09px] top-[10.71px] w-[15.82px]" data-name="Symbol">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8203 10">
            <path d={svgPaths.p3a0f3b18} fill="var(--fill-0, #00AB61)" id="Symbol" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pl-[34px] pr-[9.42px] top-0 w-[340px]" data-name="Label">
      <div className="absolute bg-[#00ab61] left-0 rounded-[4px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#00ab61] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#222] text-[16px] w-[min-content]">
        <p className="leading-[24px]">Ce passager est la personne qui effectue la réservation ? Le numéro de téléphone sera obligatoire.</p>
      </div>
      <div className="absolute h-[13.344px] left-[4.33px] top-[6.33px] w-[13.348px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3476 13.3438">
          <path d={svgPaths.p39a3f500} fill="var(--fill-0, white)" id="Symbol" />
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[76px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-[#0075ff] left-0 opacity-0 rounded-[2.5px] size-[13px] top-0" data-name="Input" />
      <Label />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Scanner mon passeport</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e20076] min-h-[48px] relative rounded-[999px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col items-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center min-h-[inherit] px-[24px] py-[12px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white min-h-[24px] min-w-[24px] relative rounded-[999px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] min-w-[inherit] pb-[9px] pt-[7.4px] px-[17px] relative size-full">
          <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">Importer mon passeport</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] py-[12px] relative size-full">
          <Container2 />
          <Container3 />
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pb-[1.25px] pl-[34px] top-[8px]" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[11px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[11px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[57.88px]">
        <p className="leading-[24px]">Homme</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[37.8px] relative shrink-0 w-[107.88px]" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[50px] size-[13px] top-[8px]" data-name="Input" />
      <Label1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pb-[1.25px] pl-[34px] top-[8px]" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[11px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[11px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[54.18px]">
        <p className="leading-[24px]">Femme</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[37.8px] relative shrink-0 w-[104.18px]" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[50px] size-[13px] top-[8px]" data-name="Input" />
      <Label2 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[3.38px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[6.05px] items-start pb-[20px] relative shrink-0 w-[340px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Sexe</p>
      </div>
      <Container8 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[48px] min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Saisissez votre premier prénom tel que mentionné sur</p>
        <p className="leading-[21px]">votre passeport/carte d’identité.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[6.05px] items-start pb-[20px] relative shrink-0 w-[340px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[57.17px]">
        <p className="leading-[24px]">Prénom</p>
      </div>
      <Container12 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[48px] min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Saisissez tous les noms, tels que mentionnés sur le</p>
        <p className="leading-[21px]">{`passeport/carte d'identité`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[6.05px] items-start pb-[20px] relative shrink-0 w-[340px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[108.7px]">
        <p className="leading-[24px]">Nom de famille</p>
      </div>
      <Container15 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">Jour</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pr-[5.333px] relative shrink-0 w-[85px]" data-name="Container">
      <Input2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">Mois</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px px-[2.667px] relative shrink-0 w-[85px]" data-name="Container">
      <Input3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">Année</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pl-[5.333px] relative shrink-0 w-[170px]" data-name="Container">
      <Input4 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[6.04px] items-start pb-[20px] relative shrink-0 w-[340px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[131.95px]">
        <p className="leading-[24px]">Date de naissance</p>
      </div>
      <Container18 />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.25px] items-start leading-[0] left-0 min-h-[25px] not-italic pb-[6px] top-0" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center relative shrink-0 text-[#222] text-[16px] w-[141.88px]">
        <p className="leading-[24px]">Numéro Flying Blue</p>
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[#8c8c8c] text-[12px] w-[49.58px]">
        <p className="leading-[18px]">Facultatif</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <div className="h-[13.344px] relative shrink-0 w-full" data-name="Symbol">
        <div className="absolute inset-[0_16.65%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3438 13.3438">
            <path d={svgPaths.p3e906580} fill="var(--fill-0, #B0B0B0)" id="Symbol" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[13.344px] items-start justify-center left-[149.26px] overflow-clip top-[25.32px] w-[16.01px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">Par exemple 123456780012</p>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-white left-0 min-h-[46px] right-0 rounded-[12px] top-[52.8px]" data-name="Input">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] overflow-clip pb-[11.5px] pt-[11px] px-[13px] relative rounded-[inherit] size-full">
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[120.8px] relative shrink-0 w-[340px]" data-name="Container">
      <Label3 />
      <Container26 />
      <Input5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[340px]" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[192px] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-[331.09px]">
        <p className="leading-[24px] mb-0">Veuillez saisir le numéro de téléphone portable</p>
        <p className="leading-[24px] mb-0">et l’adresse e-mail de ce passager. Nous</p>
        <p className="leading-[24px] mb-0">pourrons ainsi envoyer un message à tous les</p>
        <p className="leading-[24px] mb-0">passagers de cette réservation en cas de</p>
        <p className="leading-[24px] mb-0">perturbation. Nous pourrons également</p>
        <p className="leading-[24px] mb-0">envoyer un sms avec vos informations de</p>
        <p className="leading-[24px] mb-0">réservation à ce numéro de téléphone si nous</p>
        <p className="leading-[24px]">ne parvenons pas à vous joindre par e-mail.</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[10656px] min-h-[25px] pb-[1.25px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-full">
        <p className="leading-[24px]">Adresse e-mail</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">nom@exemple.fr</p>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container31 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start pb-[27px] relative shrink-0 w-[340px]" data-name="Container">
      <Label4 />
      <Input6 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[10656px] min-h-[25px] pb-[1.25px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-full">
        <p className="leading-[24px]">Numéro de téléphone mobile</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-px overflow-clip pl-[12px] pr-[32px] right-px top-px" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-[48.58px]">
        <p className="leading-[48px]">France</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute h-[8px] right-[10px] top-px w-[12.656px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6562 8">
        <g id="Container">
          <path d={svgPaths.p2bd0400} fill="var(--fill-0, #6A6A6A)" id="Symbol" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-px relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
          <p className="leading-[25.5px]">France</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_3px_0.5px_#ddd] flex flex-col h-[48px] items-start justify-center left-0 opacity-0 pl-[9.8px] pr-[33px] py-[9px] right-0 rounded-[8px] top-0" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Options />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start pb-[20px] relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <Container34 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
          <p className="leading-[46px]">+33</p>
        </div>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[13px] py-px relative size-full">
          <Container40 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pr-[4px] relative shrink-0 w-[85px]" data-name="Container">
      <Input7 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">612345678</p>
        </div>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container42 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-px pl-[4px] relative shrink-0 w-[255px]" data-name="Container">
      <Input8 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-[340px]" data-name="Container">
      <Container33 />
      <Container38 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start max-h-[10656px] min-h-[25px] pb-[1.25px] relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-full">
        <p className="leading-[24px]">Numéro de passport</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8c] text-[16px] w-full">
          <p className="leading-[normal]">612345678</p>
        </div>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] pb-[11.5px] pt-[11px] px-[13px] relative size-full">
          <Container45 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start pb-[20px] relative shrink-0 w-full" data-name="Container">
      <Label6 />
      <Input9 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-[340px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.25px] items-start leading-[0] left-0 min-h-[25px] not-italic top-0" data-name="Label">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center relative shrink-0 text-[#222] text-[16px] w-[112.21px]">
        <p className="leading-[24px]">Type de voyage</p>
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[18px] justify-center relative shrink-0 text-[#8c8c8c] text-[12px] w-[49.58px]">
        <p className="leading-[18px]">Facultatif</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <div className="h-[13.344px] relative shrink-0 w-full" data-name="Symbol">
        <div className="absolute inset-[0_16.65%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3438 13.3438">
            <path d={svgPaths.p3e906580} fill="var(--fill-0, #B0B0B0)" id="Symbol" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex h-[13.344px] items-start justify-center left-[119.59px] overflow-clip top-[25.31px] w-[16.01px]" data-name="Container">
      <Container48 />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pb-[1.25px] pl-[34px] top-[8px]" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[11px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[11px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[73.06px]">
        <p className="leading-[24px]">Personnel</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[37.8px] relative shrink-0 w-[123.06px]" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[50px] size-[13px] top-[8px]" data-name="Input" />
      <Label8 />
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pb-[1.25px] pl-[34px] top-[8px]" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[11px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[11px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Professionnel</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[37.8px] relative shrink-0 w-[149.33px]" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[50px] size-[13px] top-[8px]" data-name="Input" />
      <Label9 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[3.39px] items-start left-0 right-0 top-[46.79px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[104.59px] relative shrink-0 w-[340px]" data-name="Container">
      <Label7 />
      <Container47 />
      <Container49 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center min-h-[24px] min-w-[24px] pb-[9px] pt-[7.4px] px-[17px] relative rounded-[999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#625db1] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#140d8a] text-[16px] text-center w-[81.45px]">
        <p className="leading-[24px]">Enregistrer</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1152px] relative shrink-0 w-[340px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
      <Container14 />
      <Container17 />
      <Container25 />
      <Container29 />
      <Container30 />
      <Container32 />
      <Container43 />
      <Container46 />
      <Container52 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] px-[16px] relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background1 />
        <Background2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[20px] w-full">
        <p className="leading-[26px]">Passager 2 (Adulte)</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[32px] relative size-full">
        <Heading3 />
        <div className="absolute flex h-[10px] items-center justify-center left-[2.09px] top-[10.71px] w-[15.82px]">
          <div className="flex-none rotate-180">
            <div className="h-[10px] relative w-[15.82px]" data-name="Symbol">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8203 10">
                <path d={svgPaths.p3a0f3b18} fill="var(--fill-0, #00AB61)" id="Symbol" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute h-[16.68px] left-[2.5px] top-[-6.6px] w-[15px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6797">
          <path d={svgPaths.p3f3e7b00} fill="var(--fill-0, #00AB61)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[#222] text-[20px] top-[13px] whitespace-nowrap">
        <p className="leading-[26px]">{` Évitez les files d'attente`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#222] text-[20px] top-[39px] whitespace-nowrap">
        <p className="leading-[26px]">interminables</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a6a6a] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Accédez à la file prioritaire lors des contrôles de</p>
        <p className="leading-[24px]">sécurité et gagnez du temps à l’aéroport !</p>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pl-[34px] pr-[85.09px] top-0" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[4px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[72px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[220.91px]">
        <p className="leading-[24px] mb-0">Je choisis la File Fast Track</p>
        <p className="leading-[24px] mb-0">(disponible à Paris (Orly)) pour</p>
        <p className="leading-[24px]">12 €</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[2.5px] size-[13px] top-0" data-name="Input" />
      <Label10 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative size-full">
        <Heading1 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute left-[1.66px] size-[16.68px] top-[-6.6px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6797 16.6797">
          <path d={svgPaths.p2c61e800} fill="var(--fill-0, #00AB61)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[#222] text-[20px] top-[13px] whitespace-nowrap">
        <p className="leading-[26px]">{` Vous voulez pouvoir modifier vos`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#222] text-[20px] top-[52px] whitespace-nowrap">
        <p className="leading-[26px] mb-0">informations passager jusqu’à 48</p>
        <p className="leading-[26px]">heures après votre réservation ?</p>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pb-[1.25px] pl-[34px] pr-[64px] top-0" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[4px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] w-[166.58px]">
        <p className="leading-[24px]">Oui, je veux ça pour 2 €</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[2.5px] size-[13px] top-0" data-name="Input" />
      <Label11 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative size-full">
        <Heading4 />
        <Container56 />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute h-[15px] left-[1.66px] top-[-5.76px] w-[16.68px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6797 15">
          <path d={svgPaths.p106dba80} fill="var(--fill-0, #00AB61)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[26px] justify-center leading-[0] left-[28px] not-italic text-[#222] text-[20px] top-[13px] w-[300px]">
        <p className="leading-[26px]">{` Vous voulez des dates de voyage`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#222] text-[20px] top-[39px] whitespace-nowrap">
        <p className="leading-[26px]">flexibles ? Choisissez Flex !</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[12px] w-[7px]">
        <p className="leading-[normal]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[96px] justify-center left-0 top-[47.75px] w-[317.59px]">
        <p className="leading-[24px] mb-0">Modifiez la date de votre vol jusqu’à 2 h avant</p>
        <p className="leading-[24px] mb-0">le départ. Aussi souvent que vous le</p>
        <p className="leading-[24px] mb-0">souhaitez, jusqu’à 1 an après la date de</p>
        <p className="leading-[24px]">réservation. Soumis à disponibilité.</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[12px] w-[7px]">
        <p className="leading-[normal]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[72px] justify-center left-0 top-[35.75px] w-[311.36px]">
        <p className="leading-[24px] mb-0">Evitez de payer des frais de modification</p>
        <p className="leading-[24px] mb-0">allant jusqu’à 99€. Vous n’aurez qu’à payer la</p>
        <p className="leading-[24px]">différence de tarifaire le cas échéant.</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[12px] w-[7px]">
        <p className="leading-[normal]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-0 top-[23.75px] w-[313.69px]">
        <p className="leading-[24px] mb-0">En cas de modification, vous ne payez que la</p>
        <p className="leading-[24px]">différence de prix entre les billets.</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Item">
      <div className="-translate-y-1/2 absolute flex flex-col h-[24px] justify-center left-0 top-[12px] w-[7px]">
        <p className="leading-[normal]">{` `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[48px] justify-center left-0 top-[23.75px] w-[300.9px]">
        <p className="leading-[24px] mb-0">La/les personne(s) voyageant avec vous et</p>
        <p className="leading-[24px]">votre destination restent inchangées.</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] items-start leading-[0] not-italic pl-[17.6px] relative size-full text-[#6a6a6a] text-[16px]">
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pl-[34px] pr-[65.07px] top-0" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[4px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Oui, je souhaite cette option à</p>
        <p className="leading-[24px] mb-0">partir de 10 € par personne et par</p>
        <p className="leading-[24px]">trajet.</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[2.5px] size-[13px] top-0" data-name="Input" />
      <Label12 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative size-full">
        <Heading5 />
        <List />
        <Container57 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="absolute h-[15px] left-[1.66px] top-[-5.76px] w-[16.68px]" data-name="Symbol">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6797 15">
          <path d={svgPaths.p2cc8ab80} fill="var(--fill-0, #00AB61)" id="Symbol" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-[28px] not-italic text-[#222] text-[20px] top-[13px] whitespace-nowrap">
        <p className="leading-[26px]">{` Besoin d’une assistance`}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#222] text-[20px] top-[39px] whitespace-nowrap">
        <p className="leading-[26px]">spécifique?</p>
      </div>
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 min-h-[25px] pl-[34px] pr-[30.95px] top-0" data-name="Label">
      <div className="absolute bg-white left-0 rounded-[4px] size-[22px] top-0" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#8c8c8c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Oui, à la page suivante, je vais signaler</p>
        <p className="leading-[24px]">l’assistance nécessaire.</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="absolute bg-white border border-[#767676] border-solid left-0 opacity-0 rounded-[2.5px] size-[13px] top-0" data-name="Input" />
      <Label13 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[12px] relative size-full">
        <Heading6 />
        <Container58 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ddd] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] pb-[16px] px-[8px] relative size-full">
        <Section />
        <Section1 />
        <Border />
        <Border1 />
        <Section2 />
        <Border2 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#444] text-[16px] w-[34.8px]">
        <p className="leading-[24px]">Total</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[48px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[24px] text-right w-[84.13px]">
        <p className="leading-[24px]">98,00 €</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <Container63 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex h-[24px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
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

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between px-[8px] py-[12px] relative size-full">
        <Container60 />
        <Container64 />
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="Footer → Section">
      <div aria-hidden="true" className="absolute border-[#ddd] border-solid border-t inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <Container1 />
      <FooterSection />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Form />
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

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">Suivant</p>
      </div>
    </div>
  );
}

function Svg() {
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

function Container68() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Container">
      <Container67 />
      <Container68 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#e20076] content-stretch flex flex-col items-start min-h-[48px] px-[24px] py-[12px] relative rounded-[999px] shrink-0" data-name="Button">
      <Container66 />
    </div>
  );
}

function Container65() {
  return (
    <div className="max-w-[1152px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex gap-[160.27px] items-center max-w-[inherit] px-[8px] relative size-full">
          <Link1 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[24px] relative shrink-0 w-[390px]" data-name="Background">
      <Container65 />
    </div>
  );
}

function Item4() {
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
      <Item4 />
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

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 2">
      <div className="flex flex-col font-['SF_Compact_Rounded:Semibold',sans-serif] h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[#222] text-[36px] w-[106.49px]">
        <p className="leading-[56px]">Footer</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute left-0 overflow-clip size-px top-[-2802.36px]" data-name="Container">
      <Heading7 />
    </div>
  );
}

function Nav() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <List1 />
        <Container69 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[41px] px-[24px] relative shrink-0 w-[390px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#ebebeb] border-solid border-t inset-0 pointer-events-none" />
      <Nav />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col items-start left-0 pb-[0.1px] pt-[32px] right-0 top-[40px]" data-name="Background">
      <Container />
      <Background8 />
      <Footer />
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

function Container70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Link2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#00ab61] content-stretch flex flex-col h-[72px] items-start left-0 pb-[15.27px] pt-[18px] px-[16px] right-0 top-0" data-name="Header">
      <Container70 />
    </div>
  );
}

export default function InfoPassager() {
  return (
    <div className="bg-white relative size-full" data-name="Info passager 1">
      <Background />
      <Header />
    </div>
  );
}