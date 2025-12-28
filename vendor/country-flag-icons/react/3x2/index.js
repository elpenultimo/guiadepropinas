import React from "react";

const palette = ["#0ea5e9","#22c55e","#f59e0b","#ef4444","#6366f1","#14b8a6","#f97316","#84cc16","#06b6d4","#a855f7"];

const createFlag = (iso) => {
  const gradId = `flag-${iso.toLowerCase()}`;
  const colorA = palette[iso.charCodeAt(0) % palette.length];
  const colorB = palette[iso.charCodeAt(1) % palette.length];
  return function FlagIcon({ title, className, style, width, height, ...rest } = {}) {
    const resolvedWidth = width ?? (style && style.width);
    const finalWidth = typeof resolvedWidth === "number" ? resolvedWidth : 36;
    const finalHeight = height ?? (style && style.height) ?? (finalWidth * 2) / 3;
    const mergedStyle = { width: finalWidth, height: finalHeight, ...style };
    return React.createElement(
      "svg",
      {
        viewBox: "0 0 3 2",
        role: "img",
        "aria-label": title ?? `Bandera de ${iso}`,
        className,
        style: mergedStyle,
        xmlns: "http://www.w3.org/2000/svg",
        ...rest,
      },
      React.createElement(
        "defs",
        null,
        React.createElement(
          "linearGradient",
          { id: gradId, x1: "0%", x2: "100%", y1: "0%", y2: "0%" },
          React.createElement("stop", { offset: "0%", stopColor: colorA }),
          React.createElement("stop", { offset: "100%", stopColor: colorB })
        )
      ),
      React.createElement("rect", { width: 3, height: 2, rx: 0.05, fill: `url(#${gradId})` }),
      React.createElement(
        "text",
        {
          x: 1.5,
          y: 1.2,
          textAnchor: "middle",
          fontSize: 0.55,
          fill: "#fff",
          fontWeight: 700,
          letterSpacing: 0.05,
        },
        iso
      )
    );
  };
};

export const CL = createFlag("CL");
export const AR = createFlag("AR");
export const PE = createFlag("PE");
export const MX = createFlag("MX");
export const US = createFlag("US");
export const CA = createFlag("CA");
export const ES = createFlag("ES");
export const FR = createFlag("FR");
export const IT = createFlag("IT");
export const GB = createFlag("GB");
export const DE = createFlag("DE");
export const JP = createFlag("JP");
export const BR = createFlag("BR");
export const CO = createFlag("CO");
export const EC = createFlag("EC");
export const BO = createFlag("BO");
export const PY = createFlag("PY");
export const UY = createFlag("UY");
export const VE = createFlag("VE");
export const GT = createFlag("GT");
export const CR = createFlag("CR");
export const PA = createFlag("PA");
export const DO = createFlag("DO");
export const CU = createFlag("CU");
export const JM = createFlag("JM");
export const BS = createFlag("BS");
export const BB = createFlag("BB");
export const TT = createFlag("TT");
export const NI = createFlag("NI");
export const HN = createFlag("HN");
export const SV = createFlag("SV");
export const HT = createFlag("HT");
export const PT = createFlag("PT");
export const NL = createFlag("NL");
export const BE = createFlag("BE");
export const CH = createFlag("CH");
export const AT = createFlag("AT");
export const SE = createFlag("SE");
export const NO = createFlag("NO");
export const DK = createFlag("DK");
export const FI = createFlag("FI");
export const IE = createFlag("IE");
export const IS = createFlag("IS");
export const PL = createFlag("PL");
export const CZ = createFlag("CZ");
export const HU = createFlag("HU");
export const RO = createFlag("RO");
export const BG = createFlag("BG");
export const GR = createFlag("GR");
export const TR = createFlag("TR");
export const HR = createFlag("HR");
export const SI = createFlag("SI");
export const SK = createFlag("SK");
export const RS = createFlag("RS");
export const BA = createFlag("BA");
export const ME = createFlag("ME");
export const AL = createFlag("AL");
export const MK = createFlag("MK");
export const UA = createFlag("UA");
export const EE = createFlag("EE");
export const LV = createFlag("LV");
export const LT = createFlag("LT");
export const LU = createFlag("LU");
export const MT = createFlag("MT");
export const CY = createFlag("CY");
export const CN = createFlag("CN");
export const KR = createFlag("KR");
export const IN = createFlag("IN");
export const TH = createFlag("TH");
export const VN = createFlag("VN");
export const ID = createFlag("ID");
export const PH = createFlag("PH");
export const MY = createFlag("MY");
export const SG = createFlag("SG");
export const TW = createFlag("TW");
export const HK = createFlag("HK");
export const AE = createFlag("AE");
export const QA = createFlag("QA");
export const SA = createFlag("SA");
export const IL = createFlag("IL");
export const JO = createFlag("JO");
export const LB = createFlag("LB");
export const KH = createFlag("KH");
export const LA = createFlag("LA");
export const NP = createFlag("NP");
export const LK = createFlag("LK");
export const PK = createFlag("PK");
export const BD = createFlag("BD");
export const KZ = createFlag("KZ");
export const UZ = createFlag("UZ");
export const GE = createFlag("GE");
export const AM = createFlag("AM");
export const AZ = createFlag("AZ");
export const MA = createFlag("MA");
export const TN = createFlag("TN");
export const EG = createFlag("EG");
export const ZA = createFlag("ZA");
export const KE = createFlag("KE");
export const TZ = createFlag("TZ");
export const ET = createFlag("ET");
export const GH = createFlag("GH");
export const NG = createFlag("NG");
export const SN = createFlag("SN");
export const UG = createFlag("UG");
export const RW = createFlag("RW");
export const NA = createFlag("NA");
export const BW = createFlag("BW");
export const ZW = createFlag("ZW");
export const AU = createFlag("AU");
export const NZ = createFlag("NZ");
export const FJ = createFlag("FJ");
export const PG = createFlag("PG");

export const FLAGS = { CL: CL, AR: AR, PE: PE, MX: MX, US: US, CA: CA, ES: ES, FR: FR, IT: IT, GB: GB, DE: DE, JP: JP, BR: BR, CO: CO, EC: EC, BO: BO, PY: PY, UY: UY, VE: VE, GT: GT, CR: CR, PA: PA, DO: DO, CU: CU, JM: JM, BS: BS, BB: BB, TT: TT, NI: NI, HN: HN, SV: SV, HT: HT, PT: PT, NL: NL, BE: BE, CH: CH, AT: AT, SE: SE, NO: NO, DK: DK, FI: FI, IE: IE, IS: IS, PL: PL, CZ: CZ, HU: HU, RO: RO, BG: BG, GR: GR, TR: TR, HR: HR, SI: SI, SK: SK, RS: RS, BA: BA, ME: ME, AL: AL, MK: MK, UA: UA, EE: EE, LV: LV, LT: LT, LU: LU, MT: MT, CY: CY, CN: CN, KR: KR, IN: IN, TH: TH, VN: VN, ID: ID, PH: PH, MY: MY, SG: SG, TW: TW, HK: HK, AE: AE, QA: QA, SA: SA, IL: IL, JO: JO, LB: LB, KH: KH, LA: LA, NP: NP, LK: LK, PK: PK, BD: BD, KZ: KZ, UZ: UZ, GE: GE, AM: AM, AZ: AZ, MA: MA, TN: TN, EG: EG, ZA: ZA, KE: KE, TZ: TZ, ET: ET, GH: GH, NG: NG, SN: SN, UG: UG, RW: RW, NA: NA, BW: BW, ZW: ZW, AU: AU, NZ: NZ, FJ: FJ, PG: PG };
export default FLAGS;