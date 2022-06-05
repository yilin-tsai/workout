// 1920 * 940
// 1366 * 668 (x1.4055)
// 定義最小畫面大小，單位px
const MIN_WIDTH = 1366;
const MIN_HEIGHT = 668;
// 定義商店數量
const MAX_STORES = 200;

var resLoaded = false;
// 圖片資源位置
var images = {
  W01: "../Src/Imgs/W-01.png",
  W02: "../Src/Imgs/W-02.png",
  W03: "../Src/Imgs/W-03.png",
  W04: "../Src/Imgs/W-04.png",
  W05: "../Src/Imgs/W-05.png",
  W07: "../Src/Imgs/W-07.png",
  mapBg: "../Src/Imgs/mapBg.png",
  home: "../Src/Imgs/home.png",
  A001: "../Src/Imgs/stores/A-001.png",
  A002: "../Src/Imgs/stores/A-002.png",
  A003: "../Src/Imgs/stores/A-003.png",
  A004: "../Src/Imgs/stores/A-004.png",
  A005: "../Src/Imgs/stores/A-005.png",
  A006: "../Src/Imgs/stores/A-006.png",
  A007: "../Src/Imgs/stores/A-007.png",
  A008: "../Src/Imgs/stores/A-008.png",
  A009: "../Src/Imgs/stores/A-009.png",
  A010: "../Src/Imgs/stores/A-010.png",
  A011: "../Src/Imgs/stores/A-011.png",
  A012: "../Src/Imgs/stores/A-012.png",
  A013: "../Src/Imgs/stores/A-013.png",
  A014: "../Src/Imgs/stores/A-014.png",
  A015: "../Src/Imgs/stores/A-015.png",
  A016: "../Src/Imgs/stores/A-016.png",
  A017: "../Src/Imgs/stores/A-017.png",
  A018: "../Src/Imgs/stores/A-018.png",
  A019: "../Src/Imgs/stores/A-019.png",
  A020: "../Src/Imgs/stores/A-020.png",
  A021: "../Src/Imgs/stores/A-021.png",
  A022: "../Src/Imgs/stores/A-022.png",
  A023: "../Src/Imgs/stores/A-023.png",
  A024: "../Src/Imgs/stores/A-024.png",
  A025: "../Src/Imgs/stores/A-025.png",
  A026: "../Src/Imgs/stores/A-026.png",
  A027: "../Src/Imgs/stores/A-027.png",
  A028: "../Src/Imgs/stores/A-028.png",
  A029: "../Src/Imgs/stores/A-029.png",
  A030: "../Src/Imgs/stores/A-030.png",
  A031: "../Src/Imgs/stores/A-031.png",
  A032: "../Src/Imgs/stores/A-032.png",
  A033: "../Src/Imgs/stores/A-033.png",
  A034: "../Src/Imgs/stores/A-034.png",
  A035: "../Src/Imgs/stores/A-035.png",
  A036: "../Src/Imgs/stores/A-036.png",
  A037: "../Src/Imgs/stores/A-037.png",
  A038: "../Src/Imgs/stores/A-038.png",
  A039: "../Src/Imgs/stores/A-039.png",
  A040: "../Src/Imgs/stores/A-040.png",
  A041: "../Src/Imgs/stores/A-041.png",
  A042: "../Src/Imgs/stores/A-042.png",
  A043: "../Src/Imgs/stores/A-043.png",
  A044: "../Src/Imgs/stores/A-044.png",
  A045: "../Src/Imgs/stores/A-045.png",
  A046: "../Src/Imgs/stores/A-046.png",
  A047: "../Src/Imgs/stores/A-047.png",
  A048: "../Src/Imgs/stores/A-048.png",
  A049: "../Src/Imgs/stores/A-049.png",
  A050: "../Src/Imgs/stores/A-050.png",
  A051: "../Src/Imgs/stores/A-051.png",
  A052: "../Src/Imgs/stores/A-052.png",
  A053: "../Src/Imgs/stores/A-053.png",
  A054: "../Src/Imgs/stores/A-054.png",
  A055: "../Src/Imgs/stores/A-055.png",
  A056: "../Src/Imgs/stores/A-056.png",
  A057: "../Src/Imgs/stores/A-057.png",
  A058: "../Src/Imgs/stores/A-058.png",
  A059: "../Src/Imgs/stores/A-059.png",
  A060: "../Src/Imgs/stores/A-060.png",
  A061: "../Src/Imgs/stores/A-061.png",
  A062: "../Src/Imgs/stores/A-062.png",
  A063: "../Src/Imgs/stores/A-063.png",
  A064: "../Src/Imgs/stores/A-064.png",
  A065: "../Src/Imgs/stores/A-065.png",
  A066: "../Src/Imgs/stores/A-066.png",
  A067: "../Src/Imgs/stores/A-067.png",
  A068: "../Src/Imgs/stores/A-068.png",
  A069: "../Src/Imgs/stores/A-069.png",
  A070: "../Src/Imgs/stores/A-070.png",
  A071: "../Src/Imgs/stores/A-071.png",
  A072: "../Src/Imgs/stores/A-072.png",
  A073: "../Src/Imgs/stores/A-073.png",
  A074: "../Src/Imgs/stores/A-074.png",
  A075: "../Src/Imgs/stores/A-075.png",
  A076: "../Src/Imgs/stores/A-076.png",
  A077: "../Src/Imgs/stores/A-077.png",
  A078: "../Src/Imgs/stores/A-078.png",
  A079: "../Src/Imgs/stores/A-079.png",
  A080: "../Src/Imgs/stores/A-080.png",
  A081: "../Src/Imgs/stores/A-081.png",
  A082: "../Src/Imgs/stores/A-082.png",
  A083: "../Src/Imgs/stores/A-083.png",
  A084: "../Src/Imgs/stores/A-084.png",
  A085: "../Src/Imgs/stores/A-085.png",
  A086: "../Src/Imgs/stores/A-086.png",
  A087: "../Src/Imgs/stores/A-087.png",
  A088: "../Src/Imgs/stores/A-088.png",
  A089: "../Src/Imgs/stores/A-089.png",
  A090: "../Src/Imgs/stores/A-090.png",
  A091: "../Src/Imgs/stores/A-091.png",
  A092: "../Src/Imgs/stores/A-092.png",
  A093: "../Src/Imgs/stores/A-093.png",
  A094: "../Src/Imgs/stores/A-094.png",
  A095: "../Src/Imgs/stores/A-095.png",
  A096: "../Src/Imgs/stores/A-096.png",
  A097: "../Src/Imgs/stores/A-097.png",
  A098: "../Src/Imgs/stores/A-098.png",
  A099: "../Src/Imgs/stores/A-099.png",
  A100: "../Src/Imgs/stores/A-100.png",
  A101: "../Src/Imgs/stores/A-101.png",
  A102: "../Src/Imgs/stores/A-102.png",
  A103: "../Src/Imgs/stores/A-103.png",
  A104: "../Src/Imgs/stores/A-104.png",
  A105: "../Src/Imgs/stores/A-105.png",
  A106: "../Src/Imgs/stores/A-106.png",
  A107: "../Src/Imgs/stores/A-107.png",
  A108: "../Src/Imgs/stores/A-108.png",
  A109: "../Src/Imgs/stores/A-109.png",
  A110: "../Src/Imgs/stores/A-110.png",
  A111: "../Src/Imgs/stores/A-111.png",
  A112: "../Src/Imgs/stores/A-112.png",
  A113: "../Src/Imgs/stores/A-113.png",
  A114: "../Src/Imgs/stores/A-114.png",
  A115: "../Src/Imgs/stores/A-115.png",
  A116: "../Src/Imgs/stores/A-116.png",
  A117: "../Src/Imgs/stores/A-117.png",
  A118: "../Src/Imgs/stores/A-118.png",
  A119: "../Src/Imgs/stores/A-119.png",
  A120: "../Src/Imgs/stores/A-120.png",
  A121: "../Src/Imgs/stores/A-121.png",
  A122: "../Src/Imgs/stores/A-122.png",
  A123: "../Src/Imgs/stores/A-123.png",
  A124: "../Src/Imgs/stores/A-124.png",
  A125: "../Src/Imgs/stores/A-125.png",
  A126: "../Src/Imgs/stores/A-126.png",
  A127: "../Src/Imgs/stores/A-127.png",
  A128: "../Src/Imgs/stores/A-128.png",
  A129: "../Src/Imgs/stores/A-129.png",
  A130: "../Src/Imgs/stores/A-130.png",
  A131: "../Src/Imgs/stores/A-131.png",
  A132: "../Src/Imgs/stores/A-132.png",
  A133: "../Src/Imgs/stores/A-133.png",
  A134: "../Src/Imgs/stores/A-134.png",
  A135: "../Src/Imgs/stores/A-135.png",
  A136: "../Src/Imgs/stores/A-136.png",
  A137: "../Src/Imgs/stores/A-137.png",
  A138: "../Src/Imgs/stores/A-138.png",
  A139: "../Src/Imgs/stores/A-139.png",
  A140: "../Src/Imgs/stores/A-140.png",
  A141: "../Src/Imgs/stores/A-141.png",
  A142: "../Src/Imgs/stores/A-142.png",
  A143: "../Src/Imgs/stores/A-143.png",
  A144: "../Src/Imgs/stores/A-144.png",
  A145: "../Src/Imgs/stores/A-145.png",
  A146: "../Src/Imgs/stores/A-146.png",
  A147: "../Src/Imgs/stores/A-147.png",
  A148: "../Src/Imgs/stores/A-148.png",
  A149: "../Src/Imgs/stores/A-149.png",
  A150: "../Src/Imgs/stores/A-150.png",
  A151: "../Src/Imgs/stores/A-151.png",
  A152: "../Src/Imgs/stores/A-152.png",
  A153: "../Src/Imgs/stores/A-153.png",
  A154: "../Src/Imgs/stores/A-154.png",
  A155: "../Src/Imgs/stores/A-155.png",
  A156: "../Src/Imgs/stores/A-156.png",
  A157: "../Src/Imgs/stores/A-157.png",
  A158: "../Src/Imgs/stores/A-158.png",
  A159: "../Src/Imgs/stores/A-159.png",
  A160: "../Src/Imgs/stores/A-160.png",
  A161: "../Src/Imgs/stores/A-161.png",
  A162: "../Src/Imgs/stores/A-162.png",
  A163: "../Src/Imgs/stores/A-163.png",
  A164: "../Src/Imgs/stores/A-164.png",
  A165: "../Src/Imgs/stores/A-165.png",
  A166: "../Src/Imgs/stores/A-166.png",
  A167: "../Src/Imgs/stores/A-167.png",
  A168: "../Src/Imgs/stores/A-168.png",
  A169: "../Src/Imgs/stores/A-169.png",
  A170: "../Src/Imgs/stores/A-170.png",
  A171: "../Src/Imgs/stores/A-171.png",
  A172: "../Src/Imgs/stores/A-172.png",
  A173: "../Src/Imgs/stores/A-173.png",
  A174: "../Src/Imgs/stores/A-174.png",
  A175: "../Src/Imgs/stores/A-175.png",
  A176: "../Src/Imgs/stores/A-176.png",
  A177: "../Src/Imgs/stores/A-177.png",
  A178: "../Src/Imgs/stores/A-178.png",
  A179: "../Src/Imgs/stores/A-179.png",
  A180: "../Src/Imgs/stores/A-180.png",
  A181: "../Src/Imgs/stores/A-181.png",
  A182: "../Src/Imgs/stores/A-182.png",
  A183: "../Src/Imgs/stores/A-183.png",
  A184: "../Src/Imgs/stores/A-184.png",
  A185: "../Src/Imgs/stores/A-185.png",
  A186: "../Src/Imgs/stores/A-186.png",
  A187: "../Src/Imgs/stores/A-187.png",
  A188: "../Src/Imgs/stores/A-188.png",
  A189: "../Src/Imgs/stores/A-189.png",
  A190: "../Src/Imgs/stores/A-190.png",
  A191: "../Src/Imgs/stores/A-191.png",
  A192: "../Src/Imgs/stores/A-192.png",
  A193: "../Src/Imgs/stores/A-193.png",
  A194: "../Src/Imgs/stores/A-194.png",
  A195: "../Src/Imgs/stores/A-195.png",
  A196: "../Src/Imgs/stores/A-196.png",
  A197: "../Src/Imgs/stores/A-197.png",
  A198: "../Src/Imgs/stores/A-198.png",
  A199: "../Src/Imgs/stores/A-199.png",
  A200: "../Src/Imgs/stores/A-200.png",
  B001: "../Src/Imgs/storeInfo/B-001.png",
  B002: "../Src/Imgs/storeInfo/B-002.png",
  B003: "../Src/Imgs/storeInfo/B-003.png",
  B004: "../Src/Imgs/storeInfo/B-004.png",
  B005: "../Src/Imgs/storeInfo/B-005.png",
  B006: "../Src/Imgs/storeInfo/B-006.png",
  B007: "../Src/Imgs/storeInfo/B-007.png",
  B008: "../Src/Imgs/storeInfo/B-008.png",
  B009: "../Src/Imgs/storeInfo/B-009.png",
  B010: "../Src/Imgs/storeInfo/B-010.png",
  B011: "../Src/Imgs/storeInfo/B-011.png",
  B012: "../Src/Imgs/storeInfo/B-012.png",
  B013: "../Src/Imgs/storeInfo/B-013.png",
  B014: "../Src/Imgs/storeInfo/B-014.png",
  B015: "../Src/Imgs/storeInfo/B-015.png",
  B016: "../Src/Imgs/storeInfo/B-016.png",
  B017: "../Src/Imgs/storeInfo/B-017.png",
  B018: "../Src/Imgs/storeInfo/B-018.png",
  B019: "../Src/Imgs/storeInfo/B-019.png",
  B020: "../Src/Imgs/storeInfo/B-020.png",
  B021: "../Src/Imgs/storeInfo/B-021.png",
  B022: "../Src/Imgs/storeInfo/B-022.png",
  B023: "../Src/Imgs/storeInfo/B-023.png",
  B024: "../Src/Imgs/storeInfo/B-024.png",
  B025: "../Src/Imgs/storeInfo/B-025.png",
  B026: "../Src/Imgs/storeInfo/B-026.png",
  B027: "../Src/Imgs/storeInfo/B-027.png",
  B028: "../Src/Imgs/storeInfo/B-028.png",
  B029: "../Src/Imgs/storeInfo/B-029.png",
  B030: "../Src/Imgs/storeInfo/B-030.png",
  B031: "../Src/Imgs/storeInfo/B-031.png",
  B032: "../Src/Imgs/storeInfo/B-032.png",
  B033: "../Src/Imgs/storeInfo/B-033.png",
  B034: "../Src/Imgs/storeInfo/B-034.png",
  B035: "../Src/Imgs/storeInfo/B-035.png",
  B036: "../Src/Imgs/storeInfo/B-036.png",
  B037: "../Src/Imgs/storeInfo/B-037.png",
  B038: "../Src/Imgs/storeInfo/B-038.png",
  B039: "../Src/Imgs/storeInfo/B-039.png",
  B040: "../Src/Imgs/storeInfo/B-040.png",
  B041: "../Src/Imgs/storeInfo/B-041.png",
  B042: "../Src/Imgs/storeInfo/B-042.png",
  B043: "../Src/Imgs/storeInfo/B-043.png",
  B044: "../Src/Imgs/storeInfo/B-044.png",
  B045: "../Src/Imgs/storeInfo/B-045.png",
  B046: "../Src/Imgs/storeInfo/B-046.png",
  B047: "../Src/Imgs/storeInfo/B-047.png",
  B048: "../Src/Imgs/storeInfo/B-048.png",
  B049: "../Src/Imgs/storeInfo/B-049.png",
  B050: "../Src/Imgs/storeInfo/B-050.png",
  B051: "../Src/Imgs/storeInfo/B-051.png",
  B052: "../Src/Imgs/storeInfo/B-052.png",
  B053: "../Src/Imgs/storeInfo/B-053.png",
  B054: "../Src/Imgs/storeInfo/B-054.png",
  B055: "../Src/Imgs/storeInfo/B-055.png",
  B056: "../Src/Imgs/storeInfo/B-056.png",
  B057: "../Src/Imgs/storeInfo/B-057.png",
  B058: "../Src/Imgs/storeInfo/B-058.png",
  B059: "../Src/Imgs/storeInfo/B-059.png",
  B060: "../Src/Imgs/storeInfo/B-060.png",
  B061: "../Src/Imgs/storeInfo/B-061.png",
  B062: "../Src/Imgs/storeInfo/B-062.png",
  B063: "../Src/Imgs/storeInfo/B-063.png",
  B064: "../Src/Imgs/storeInfo/B-064.png",
  B065: "../Src/Imgs/storeInfo/B-065.png",
  B066: "../Src/Imgs/storeInfo/B-066.png",
  B067: "../Src/Imgs/storeInfo/B-067.png",
  B068: "../Src/Imgs/storeInfo/B-068.png",
  B069: "../Src/Imgs/storeInfo/B-069.png",
  B070: "../Src/Imgs/storeInfo/B-070.png",
  B071: "../Src/Imgs/storeInfo/B-071.png",
  B072: "../Src/Imgs/storeInfo/B-072.png",
  B073: "../Src/Imgs/storeInfo/B-073.png",
  B074: "../Src/Imgs/storeInfo/B-074.png",
  B075: "../Src/Imgs/storeInfo/B-075.png",
  B076: "../Src/Imgs/storeInfo/B-076.png",
  B077: "../Src/Imgs/storeInfo/B-077.png",
  B078: "../Src/Imgs/storeInfo/B-078.png",
  B079: "../Src/Imgs/storeInfo/B-079.png",
  B080: "../Src/Imgs/storeInfo/B-080.png",
  B081: "../Src/Imgs/storeInfo/B-081.png",
  B082: "../Src/Imgs/storeInfo/B-082.png",
  B083: "../Src/Imgs/storeInfo/B-083.png",
  B084: "../Src/Imgs/storeInfo/B-084.png",
  B085: "../Src/Imgs/storeInfo/B-085.png",
  B086: "../Src/Imgs/storeInfo/B-086.png",
  B087: "../Src/Imgs/storeInfo/B-087.png",
  B088: "../Src/Imgs/storeInfo/B-088.png",
  B089: "../Src/Imgs/storeInfo/B-089.png",
  B090: "../Src/Imgs/storeInfo/B-090.png",
  B091: "../Src/Imgs/storeInfo/B-091.png",
  B092: "../Src/Imgs/storeInfo/B-092.png",
  B093: "../Src/Imgs/storeInfo/B-093.png",
  B094: "../Src/Imgs/storeInfo/B-094.png",
  B095: "../Src/Imgs/storeInfo/B-095.png",
  B096: "../Src/Imgs/storeInfo/B-096.png",
  B097: "../Src/Imgs/storeInfo/B-097.png",
  B098: "../Src/Imgs/storeInfo/B-098.png",
  B099: "../Src/Imgs/storeInfo/B-099.png",
  B100: "../Src/Imgs/storeInfo/B-100.png",
  B101: "../Src/Imgs/storeInfo/B-101.png",
  B102: "../Src/Imgs/storeInfo/B-102.png",
  B103: "../Src/Imgs/storeInfo/B-103.png",
  B104: "../Src/Imgs/storeInfo/B-104.png",
  B105: "../Src/Imgs/storeInfo/B-105.png",
  B106: "../Src/Imgs/storeInfo/B-106.png",
  B107: "../Src/Imgs/storeInfo/B-107.png",
  B108: "../Src/Imgs/storeInfo/B-108.png",
  B109: "../Src/Imgs/storeInfo/B-109.png",
  B110: "../Src/Imgs/storeInfo/B-110.png",
  B111: "../Src/Imgs/storeInfo/B-111.png",
  B112: "../Src/Imgs/storeInfo/B-112.png",
  B113: "../Src/Imgs/storeInfo/B-113.png",
  B114: "../Src/Imgs/storeInfo/B-114.png",
  B115: "../Src/Imgs/storeInfo/B-115.png",
  B116: "../Src/Imgs/storeInfo/B-116.png",
  B117: "../Src/Imgs/storeInfo/B-117.png",
  B118: "../Src/Imgs/storeInfo/B-118.png",
  B119: "../Src/Imgs/storeInfo/B-119.png",
  B120: "../Src/Imgs/storeInfo/B-120.png",
  B121: "../Src/Imgs/storeInfo/B-121.png",
  B122: "../Src/Imgs/storeInfo/B-122.png",
  B123: "../Src/Imgs/storeInfo/B-123.png",
  B124: "../Src/Imgs/storeInfo/B-124.png",
  B125: "../Src/Imgs/storeInfo/B-125.png",
  B126: "../Src/Imgs/storeInfo/B-126.png",
  B127: "../Src/Imgs/storeInfo/B-127.png",
  B128: "../Src/Imgs/storeInfo/B-128.png",
  B129: "../Src/Imgs/storeInfo/B-129.png",
  B130: "../Src/Imgs/storeInfo/B-130.png",
  B131: "../Src/Imgs/storeInfo/B-131.png",
  B132: "../Src/Imgs/storeInfo/B-132.png",
  B133: "../Src/Imgs/storeInfo/B-133.png",
  B134: "../Src/Imgs/storeInfo/B-134.png",
  B135: "../Src/Imgs/storeInfo/B-135.png",
  B136: "../Src/Imgs/storeInfo/B-136.png",
  B137: "../Src/Imgs/storeInfo/B-137.png",
  B138: "../Src/Imgs/storeInfo/B-138.png",
  B139: "../Src/Imgs/storeInfo/B-139.png",
  B140: "../Src/Imgs/storeInfo/B-140.png",
  B141: "../Src/Imgs/storeInfo/B-141.png",
  B142: "../Src/Imgs/storeInfo/B-142.png",
  B143: "../Src/Imgs/storeInfo/B-143.png",
  B144: "../Src/Imgs/storeInfo/B-144.png",
  B145: "../Src/Imgs/storeInfo/B-145.png",
  B146: "../Src/Imgs/storeInfo/B-146.png",
  B147: "../Src/Imgs/storeInfo/B-147.png",
  B148: "../Src/Imgs/storeInfo/B-148.png",
  B149: "../Src/Imgs/storeInfo/B-149.png",
  B150: "../Src/Imgs/storeInfo/B-150.png",
  B151: "../Src/Imgs/storeInfo/B-151.png",
  B152: "../Src/Imgs/storeInfo/B-152.png",
  B153: "../Src/Imgs/storeInfo/B-153.png",
  B154: "../Src/Imgs/storeInfo/B-154.png",
  B155: "../Src/Imgs/storeInfo/B-155.png",
  B156: "../Src/Imgs/storeInfo/B-156.png",
  B157: "../Src/Imgs/storeInfo/B-157.png",
  B158: "../Src/Imgs/storeInfo/B-158.png",
  B159: "../Src/Imgs/storeInfo/B-159.png",
  B160: "../Src/Imgs/storeInfo/B-160.png",
  B161: "../Src/Imgs/storeInfo/B-161.png",
  B162: "../Src/Imgs/storeInfo/B-162.png",
  B163: "../Src/Imgs/storeInfo/B-163.png",
  B164: "../Src/Imgs/storeInfo/B-164.png",
  B165: "../Src/Imgs/storeInfo/B-165.png",
  B166: "../Src/Imgs/storeInfo/B-166.png",
  B167: "../Src/Imgs/storeInfo/B-167.png",
  B168: "../Src/Imgs/storeInfo/B-168.png",
  B169: "../Src/Imgs/storeInfo/B-169.png",
  B170: "../Src/Imgs/storeInfo/B-170.png",
  B171: "../Src/Imgs/storeInfo/B-171.png",
  B172: "../Src/Imgs/storeInfo/B-172.png",
  B173: "../Src/Imgs/storeInfo/B-173.png",
  B174: "../Src/Imgs/storeInfo/B-174.png",
  B175: "../Src/Imgs/storeInfo/B-175.png",
  B176: "../Src/Imgs/storeInfo/B-176.png",
  B177: "../Src/Imgs/storeInfo/B-177.png",
  B178: "../Src/Imgs/storeInfo/B-178.png",
  B179: "../Src/Imgs/storeInfo/B-179.png",
  B180: "../Src/Imgs/storeInfo/B-180.png",
  B181: "../Src/Imgs/storeInfo/B-181.png",
  B182: "../Src/Imgs/storeInfo/B-182.png",
  B183: "../Src/Imgs/storeInfo/B-183.png",
  B184: "../Src/Imgs/storeInfo/B-184.png",
  B185: "../Src/Imgs/storeInfo/B-185.png",
  B186: "../Src/Imgs/storeInfo/B-186.png",
  B187: "../Src/Imgs/storeInfo/B-187.png",
  B188: "../Src/Imgs/storeInfo/B-188.png",
  B189: "../Src/Imgs/storeInfo/B-189.png",
  B190: "../Src/Imgs/storeInfo/B-190.png",
  B191: "../Src/Imgs/storeInfo/B-191.png",
  B192: "../Src/Imgs/storeInfo/B-192.png",
  B193: "../Src/Imgs/storeInfo/B-193.png",
  B194: "../Src/Imgs/storeInfo/B-194.png",
  B195: "../Src/Imgs/storeInfo/B-195.png",
  B196: "../Src/Imgs/storeInfo/B-196.png",
  B197: "../Src/Imgs/storeInfo/B-197.png",
  B198: "../Src/Imgs/storeInfo/B-198.png",
  B199: "../Src/Imgs/storeInfo/B-199.png",
  B200: "../Src/Imgs/storeInfo/B-200.png",
  T01: "../Src/Imgs/T01.png",
  T02: "../Src/Imgs/T02.png",
  T03: "../Src/Imgs/T03.png",
  T04: "../Src/Imgs/T04.png",
  T05: "../Src/Imgs/T05.png",
  T06: "../Src/Imgs/T06.png",
  T07: "../Src/Imgs/T07.png",
  T08: "../Src/Imgs/T08.png",
  Ex01: "../Src/Imgs/exercise/A1.png",
  Ex02: "../Src/Imgs/exercise/A2.png",
  Ex03: "../Src/Imgs/exercise/A3.png",
  Ex04: "../Src/Imgs/exercise/A4.png",
  Ex05: "../Src/Imgs/exercise/A5.png",
  Ex06: "../Src/Imgs/exercise/A6.png",
  Ex07: "../Src/Imgs/exercise/A7.png",
  Ex08: "../Src/Imgs/exercise/A8.png",
  Ex09: "../Src/Imgs/exercise/A9.png",
  Ex10: "../Src/Imgs/exercise/A10.png",
  Ex11: "../Src/Imgs/exercise/A11.png",
  Ex12: "../Src/Imgs/exercise/A12.png",
  Ex13: "../Src/Imgs/exercise/A13.png",
  Ex14: "../Src/Imgs/exercise/A14.png",
  Ex15: "../Src/Imgs/exercise/A15.png",
  Ex16: "../Src/Imgs/exercise/A16.png",
  Ex17: "../Src/Imgs/exercise/A17.png",
  Ex18: "../Src/Imgs/exercise/A18.png",
  Ex19: "../Src/Imgs/exercise/A19.png",
  Ex20: "../Src/Imgs/exercise/A20.png",
  Ex21: "../Src/Imgs/exercise/A21.png",
  Ex22: "../Src/Imgs/exercise/A22.png",
  Ex23: "../Src/Imgs/exercise/A23.png",
  Ex24: "../Src/Imgs/exercise/A24.png",
  Ex25: "../Src/Imgs/exercise/A25.png",
  Ex26: "../Src/Imgs/exercise/A26.png",
  Ex27: "../Src/Imgs/exercise/A27.png",
  Ex28: "../Src/Imgs/exercise/A28.png",
  Ex29: "../Src/Imgs/exercise/A29.png",
  Ex30: "../Src/Imgs/exercise/A30.png",
  Ex31: "../Src/Imgs/exercise/A31.png",
  Ex32: "../Src/Imgs/exercise/A32.png",
  Ex33: "../Src/Imgs/exercise/A33.png",
  Ex34: "../Src/Imgs/exercise/A34.png",
  Ex35: "../Src/Imgs/exercise/A35.png",
  Ex36: "../Src/Imgs/exercise/A36.png",
  Ex37: "../Src/Imgs/exercise/A37.png",
  Ex38: "../Src/Imgs/exercise/A38.png",
  Ex39: "../Src/Imgs/exercise/A39.png",
  Ex40: "../Src/Imgs/exercise/A40.png",
  Ex41: "../Src/Imgs/exercise/A41.png",
  Ex42: "../Src/Imgs/exercise/A42.png",
  Ex43: "../Src/Imgs/exercise/A43.png",
  Ex44: "../Src/Imgs/exercise/A44.png",
  Ex45: "../Src/Imgs/exercise/A45.png",
};

// 初始化canvas物件
var mainCanvas = document.getElementById("mainCanvas");
var mainCtx = mainCanvas.getContext("2d");
var dialogCanvas = document.getElementById("dialogCanvas");
var dialogCtx = dialogCanvas.getContext("2d");
var gameCanvas = document.getElementById("gameCanvas");
var gameCtx = gameCanvas.getContext("2d");
// 定義畫布中心位置
var middleX = mainCanvas.width / 2;
var middleY = mainCanvas.height / 2;
var gameZoneX = -180;
var gameZoneY = -150;
// 定義運動畫面參數物件
var exercisParameter = {};
// 定義星星增加/扣除規則
var NUM_ADD_STAR = 1;
var NUM_SUB_STAR = 3;

// 定義全域狀態物件
/*
  home: home/intro
  health: main
  exercise: 1-1/1-2/...
  tasty: intro/main

  dialog types: intro
*/
var state = {
  firstUse: {
    health: true,
    tasty: true,
    exersise: [true, true, true],
  },
  // 定義當前畫面
  theme: "home",
  page: "home",
  // 定義遊戲物件，包含星星數量與地圖
  gameObjects: {
    stars: 3,
    maps: [
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: -1, state: 0 },
        { store: -2, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
      [
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
        { store: 0, state: 0 },
      ],
    ],
    storeList: [],
  },
};

// 定義畫面可互動物件
var buttons = [
  {
    belong: {
      theme: "home",
      page: "home",
    },
    text: "開　始",
    size: {
      width: 200,
      heigth: 70,
    },
    setPosition: function () {
      this.position.x = middleX - 100;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "conditionDisplayBtn",
    color: "#73A5BE",
    action: startBtnAction,
    condition: () => {
      return resLoaded;
    },
  },
  {
    belong: {
      theme: "home",
      page: "home",
    },
    text: "開　始",
    size: {
      width: 200,
      heigth: 70,
    },
    setPosition: function () {
      this.position.x = middleX - 100;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "conditionDisplayBtn",
    color: "#A7A7A7",
    action: null,
    condition: () => {
      return !resLoaded;
    },
  },
  {
    belong: {
      theme: "home",
      page: "intro",
    },
    text: "確　定",
    size: {
      width: 200,
      heigth: 70,
    },
    setPosition: function () {
      this.position.x = middleX - 100;
      this.position.y = mainCanvas.height - 120;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "normal",
    color: "#73A5BE",
    action: intorBtnAction,
  },
  {
    belong: {
      theme: "tasty",
      page: "intro",
    },
    text: "確　定",
    size: {
      width: 200,
      heigth: 70,
    },
    setPosition: function () {
      this.position.x = middleX - 100;
      this.position.y = 530 + (mainCanvas.height - 530) / 2 - 35;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "normal",
    color: "#88A073",
    action: tastyIntorBtnAction,
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "建 造",
    size: {
      width: 120,
      heigth: 50,
    },
    setPosition: function () {
      this.position.x = middleX + 370;
      this.position.y = 25;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "conditionDisplayBtn_build",
    color: "#ECD276",
    action: () => {
      updateDialog = confirmBuildDialog;
      updateDialog();
      showDialog();
    },
    condition: () => {
      return state.gameObjects.stars >= NUM_SUB_STAR;
    },
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "建 造",
    size: {
      width: 120,
      heigth: 50,
    },
    setPosition: function () {
      this.position.x = middleX + 370;
      this.position.y = 25;
    },
    font: {
      size: 36,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "conditionDisplayBtn_build",
    color: "#A7A7A7",
    action: () => {
      updateDialog = noStarDialog;
      updateDialog();
      showDialog();
    },
    condition: () => {
      return state.gameObjects.stars < NUM_SUB_STAR;
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Tasty",
    size: {
      width: 200,
      heigth: 60,
    },
    setPosition: function () {
      this.position.x = middleX;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_r",
    color: "#555555",
    action: function () {
      if (state.firstUse.tasty) {
        changeThemePage("tasty", "intro");
      } else {
        changeThemePage("tasty", "main");
      }
      document.querySelector("body").style.backgroundColor = "#B2CA9D";
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Health",
    size: {
      width: 200,
      heigth: 60,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_l",
    color: "#73A5BE",
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "Health",
    size: {
      width: 200,
      heigth: 60,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_l",
    color: "#555555",
    action: function () {
      changeThemePage("health", "main");
      document.querySelector("body").style.backgroundColor = "#9BCAE5";
    },
  },
  {
    belong: {
      theme: "tasty",
      page: "main",
    },
    text: "Tasty",
    size: {
      width: 200,
      heigth: 60,
    },
    setPosition: function () {
      this.position.x = middleX;
      this.position.y = 20;
    },
    font: {
      size: 40,
      color: "white",
      family: "NotoSansTC-Light",
    },
    sharp: "themeSelector_r",
    color: "#88A073",
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Carpal Tunnel",
    subText: "腕隧道",
    size: {
      width: 350,
      heigth: 350,
    },
    setPosition: function () {
      this.position.x = middleX - 535;
      this.position.y = middleY - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    action: function () {
      changeThemePage("exercise", "1-1");
    },
    img: {
      src: "W02",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Neck & Shoulder",
    subText: "肩頸",
    size: {
      width: 350,
      heigth: 350,
    },
    setPosition: function () {
      this.position.x = middleX - 175;
      this.position.y = middleY - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    action: function () {
      changeThemePage("exercise", "2-1");
    },
    img: {
      src: "W03",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    text: "Elbow",
    subText: "手肘",
    size: {
      width: 350,
      heigth: 350,
    },
    setPosition: function () {
      this.position.x = middleX + 185;
      this.position.y = middleY - 150;
    },
    font: {
      size: 40,
      color: "#555555",
      family: "NotoSansTC-Light",
    },
    sharp: "imageBtn",
    color: "#F5F5F5",
    action: function () {
      changeThemePage("exercise", "3-1");
    },
    img: {
      src: "W04",
      size: {
        width: 325,
        height: 262,
      },
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    sharp: "iconBtn",
    text: "內　容",
    icon: {
      sharp: "+",
      direction: "right",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: true,
    size: {
      width: 130,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 535 - this.size.width;
      let _y = middleY - 231;
      if (_y < 144) _y = 144;
      this.position.y = _y;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = showContentDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "health",
      page: "main",
    },
    sharp: "iconBtn",
    text: "介　紹",
    icon: {
      sharp: "=",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: true,
    size: {
      width: 130,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 535;
      let _y = middleY - 231;
      if (_y < 144) _y = 144;
      this.position.y = _y;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("home", "intro");
    },
  },
  //exercise 1
  {
    belong: {
      theme: "exercise",
      page: "1-1",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-1",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-1",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-1",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-2",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-2",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-1");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-2",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-2",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-2",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-3",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-3",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-2");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-3",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-3",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-3",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-4",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-4",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-3");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-4",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-5");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-4",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-5");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-4",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-5",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-5",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-4");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-5",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-6");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-5",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-6");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-5",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-6",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-6",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-5");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-6",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-7");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-6",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "1-7");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-6",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-7",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-7",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      changeThemePage("exercise", "1-6");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-7",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-7",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "1-7",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  // exercise 2
  {
    belong: {
      theme: "exercise",
      page: "2-1",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-1",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-1",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-1",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-2",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-2",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "2-1");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-2",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-2",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-2",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-3",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-3",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "2-2");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-3",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-3",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "2-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-3",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-4",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-4",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "2-3");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-4",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-4",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "2-4",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  // exercise 3
  {
    belong: {
      theme: "exercise",
      page: "3-1",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-1",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-1",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-2");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-1",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-2",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-2",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "3-1");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-2",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-2",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-3");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-2",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-3",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-3",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "3-2");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-3",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-3",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        changeThemePage("exercise", "3-4");
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-3",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-4",
    },
    sharp: "iconBtn",
    text: "X",
    icon: {
      sharp: "X",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = 26;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      updateDialog = confirmExitDialog;
      updateDialog();
      showDialog();
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-4",
    },
    sharp: "iconBtn",
    text: "<",
    icon: {
      sharp: "<",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX - 200;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      changeThemePage("exercise", "3-3");
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-4",
    },
    sharp: "iconBtn",
    text: ">",
    icon: {
      sharp: ">",
      direction: "left",
      size: {
        w: 20,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 20,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = middleX + 180;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: () => {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-4",
    },
    sharp: "background",
    text: "",
    size: {
      width: mainCanvas.width - 40,
      heigth: mainCanvas.height - 120,
    },
    setPosition: function () {
      this.position.x = 20;
      this.position.y = 100;
    },
    action: function () {
      if (finishedRound >= 1) {
        updateDialog = finishExerciseDialog;
        updateDialog();
        showDialog();
      }
    },
  },
  {
    belong: {
      theme: "exercise",
      page: "3-4",
    },
    sharp: "iconBtn",
    text: "||",
    icon: {
      sharp: "||",
      direction: "left",
      size: {
        w: 30,
        h: 30,
      },
    },
    showText: false,
    size: {
      width: 30,
      heigth: 30,
    },
    setPosition: function () {
      this.position.x = mainCanvas.width - 50;
      this.position.y = 40;
    },
    font: {
      size: 34,
      color: "white",
      family: "NotoSansTC-Light",
    },
    action: function () {
      exercisParameter.status = "pause";
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  },
];

// 初始化物件
var updateDialog = null;
var dialogButtons = [];
var gameButtons = [];
var dialogParameters = {};

// 載入資源，確認資源載入後更新畫面按鈕
var loaded = 0;
function loadResources() {
  let saveFile = localStorage.getItem("state");
  if (saveFile) {
    let loadState = JSON.parse(saveFile.toString());
    loadState.theme = "home";
    loadState.page = "home";
    state = loadState;
  } else {
    for (let i = 1; i <= MAX_STORES; i++) {
      state.gameObjects.storeList.push(i);
    }
  }

  for (let key in images) {
    let _src = images[key];
    images[key] = new Image();
    images[key].src = _src;
    images[key].addEventListener(
      "load",
      function () {
        loaded++;
        if (loaded == Object.keys(images).length) {
          resLoaded = true;
          console.log("OK");
          updateComponentPosition();
          drawButtons();
        }
      },
      false
    );
  }
}

// 初始化畫面內容
function initialize() {
  document.getElementById("loading").style.display = "none";
  window.addEventListener("resize", redraw, false);
  redraw();
}

loadResources();
setTimeout(initialize, 3000);

// 更新畫面按鈕位置，當螢幕重新縮放時調用
function updateComponentPosition() {
  buttons.forEach((btn) => {
    btn.position = { x: 0, y: 0 };
    btn.setPosition();
  });
}

// 根據當前狀態繪製畫面內容
function updateTheme() {
  setBackGround();
  gameCanvas.style.zIndex = -1;
  switch (state.theme) {
    case "home":
    default:
      switch (state.page) {
        case "home":
        default:
          // 繪製首頁
          drawHome();
          break;
        case "intro":
          // 繪製介紹頁面
          drawIntro();
          break;
      }
      break;
    case "health":
      switch (state.page) {
        case "main":
        default:
          // 繪製Health主頁
          drawMain();
          break;
      }
      break;
    case "tasty":
      switch (state.page) {
        case "intro":
        default:
          // 繪製Tasty介紹頁面
          drawTastyIntro();
          break;
        case "main":
          // 繪製Tasty主頁面
          gameCanvas.style.zIndex = 2;
          drawTastyMain();
          break;
      }
      break;
    case "exercise":
      // 繪製運動頁面
      drawExercise();
      switch (state.page) {
        case "1-1":
        default:
          drawExerciseText("Carpal Tunnel 1/7", 10, "1~3", [
            "放鬆動作：",
            "手肘彎曲撐著，手腕維持正中位置，手指放鬆。",
          ]);
          setupExercise(3, 10, [images["Ex01"], images["Ex02"]], [5, 10], {
            theme: "exercise",
            page: "1-2",
          });

          if (state.firstUse.exersise[0]) {
            updateDialog = showReadyExerciseDialog;
            dialogParameters.index = 0;
            dialogParameters.numPart = "7";
            dialogParameters.seconds = "10~30";
          } else {
            updateDialog = showStartExerciseDialog;
          }
          dialogParameters.exerciseName = "腕隧道舒緩";
          updateDialog();
          showDialog();
          break;
        case "1-2":
          drawExerciseText("Carpal Tunnel 2/7", 10, "1~3", [
            "手腕伸直/彎曲運動：",
            "前臂做適當支撐，手垂出桌緣，單純做手腕伸直/彎曲的動作。",
          ]);
          setupExercise(
            3,
            10,
            [images["Ex03"], images["Ex04"], images["Ex05"], images["Ex06"]],
            [4, 5, 9, 10],
            {
              theme: "exercise",
              page: "1-3",
            }
          );
          startExercise();
          break;
        case "1-3":
          drawExerciseText("Carpal Tunnel 3/7", 10, "1~3", [
            "手指伸直運動：",
            "手肘彎曲撐著，手腕維持正中位置，手指伸直。",
          ]);
          setupExercise(3, 10, [images["Ex07"], images["Ex08"]], [5, 10], {
            theme: "exercise",
            page: "1-4",
          });
          startExercise();
          break;
        case "1-4":
          drawExerciseText("Carpal Tunnel 4/7", 10, "1~3", [
            "手指小勾狀運動：",
            "前兩個指節做彎曲動作。",
          ]);
          setupExercise(3, 10, [images["Ex09"]], [10], {
            theme: "exercise",
            page: "1-5",
          });
          startExercise();
          break;
        case "1-5":
          drawExerciseText("Carpal Tunnel 5/7", 10, "1~3", [
            "手指七型運動：",
            "前兩指節伸直，掌指關節彎曲。",
          ]);
          setupExercise(3, 10, [images["Ex10"]], [10], {
            theme: "exercise",
            page: "1-6",
          });
          startExercise();
          break;
        case "1-6":
          drawExerciseText("Carpal Tunnel 6/7", 10, "1~3", [
            "手指大勾狀運動：",
            "手指做彎曲動作。",
          ]);
          setupExercise(3, 10, [images["Ex11"]], [10], {
            theme: "exercise",
            page: "1-7",
          });
          startExercise();
          break;
        case "1-7":
          drawExerciseText("Carpal Tunnel 7/7", 10, "1~3", [
            "手握拳運動：",
            "做握拳的動作。",
          ]);
          setupExercise(3, 10, [images["Ex12"], images["Ex13"]], [5, 10], null);
          startExercise();
          break;

        case "2-1":
          drawExerciseText("Neck & Shoulder 1/4", 20, "3", [
            "身體打直，右手伸過頭頂左邊，",
            "將頭往右下方扳，感覺頸部側邊被拉伸。",
            "每10秒換邊。",
          ]);
          setupExercise(
            3,
            20,
            [images["Ex14"], images["Ex15"], images["Ex16"], images["Ex17"]],
            [9, 10, 19, 20],
            {
              theme: "exercise",
              page: "2-2",
            }
          );

          if (state.firstUse.exersise[1]) {
            updateDialog = showReadyExerciseDialog;
            dialogParameters.index = 1;
            dialogParameters.numPart = "4";
            dialogParameters.seconds = "60";
          } else {
            updateDialog = showStartExerciseDialog;
          }
          dialogParameters.exerciseName = "肩頸運動";
          updateDialog();
          showDialog();
          break;
        case "2-2":
          drawExerciseText("Neck & Shoulder 2/4", 20, "3", [
            "左手向右前方伸直，右手向上彎曲，",
            "夾住左手肘，往右邊拉伸，感覺左肩與左側邊被拉伸。",
            "每10秒換邊。",
          ]);
          setupExercise(
            3,
            20,
            [images["Ex18"], images["Ex19"], images["Ex20"], images["Ex21"]],
            [9, 10, 19, 20],
            {
              theme: "exercise",
              page: "2-3",
            }
          );
          startExercise();
          break;
        case "2-3":
          drawExerciseText(
            "Neck & Shoulder 3/4",
            2,
            "3",
            [
              "身體打直，兩邊肩膀往上舉，然後往後至前，",
              "做轉圈圈的動作，反轉3圈，再正轉3圈。",
            ],
            true
          );
          setupExercise(
            1,
            12,
            [
              images["Ex22"],
              images["Ex23"],
              images["Ex22"],
              images["Ex23"],
              images["Ex22"],
              images["Ex23"],
              images["Ex24"],
              images["Ex25"],
              images["Ex24"],
              images["Ex25"],
              images["Ex24"],
              images["Ex25"],
            ],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            {
              theme: "exercise",
              page: "2-4",
            }
          );
          startExercise();
          break;
        case "2-4":
          drawExerciseText("Neck & Shoulder 4/4", 20, "3", [
            "雙手手指交叉，舉到頭頂正上方，",
            "手掌往上翻往上拉伸，感覺手臂與身體兩側被拉伸。",
            "每10秒換邊。",
          ]);
          setupExercise(
            3,
            20,
            [images["Ex26"], images["Ex27"], images["Ex28"], images["Ex29"]],
            [9, 10, 19, 20],
            null
          );
          startExercise();
          break;

        case "3-1":
          drawExerciseText("Elbow 1/4", 10, "5~10", [
            "將前臂至於桌邊，手腕伸出桌緣。",
            "輕握拳，掌面朝下，先維持手腕於正中位置，手腕往下屈曲。",
            "每10秒休息5秒。",
          ]);
          setupExercise(
            10,
            15,
            [images["Ex30"], images["Ex31"], images["Ex32"], images["Ex33"]],
            [9, 10, 14, 15],
            {
              theme: "exercise",
              page: "3-2",
            },
            true
          );

          if (state.firstUse.exersise[2]) {
            updateDialog = showReadyExerciseDialog;
            dialogParameters.index = 2;
            dialogParameters.numPart = "4";
            dialogParameters.seconds = "50~100";
          } else {
            updateDialog = showStartExerciseDialog;
          }
          dialogParameters.exerciseName = "手肘運動";
          updateDialog();
          showDialog();
          break;
        case "3-2":
          drawExerciseText("Elbow 2/4", 10, "5~10", [
            "將前臂至於桌邊，手腕伸出桌緣。",
            "輕握拳，掌面朝下，先維持手腕於正中位置，手腕往上屈曲。",
            "每10秒休息5秒。",
          ]);
          setupExercise(
            10,
            15,
            [images["Ex34"], images["Ex35"], images["Ex36"], images["Ex37"]],
            [9, 10, 14, 15],
            {
              theme: "exercise",
              page: "3-3",
            },
            true
          );
          startExercise();
          break;
        case "3-3":
          drawExerciseText("Elbow 3/4", 10, "5~10", [
            "將前臂至於桌邊，手腕伸出桌緣。輕握拳，拳眼朝上，",
            "先維持手腕於正中位置，手腕（即小指側）往下屈曲。",
            "每10秒休息5秒。",
          ]);
          setupExercise(
            10,
            15,
            [images["Ex38"], images["Ex39"], images["Ex40"], images["Ex41"]],
            [9, 10, 14, 15],
            {
              theme: "exercise",
              page: "3-4",
            },
            true
          );
          startExercise();
          break;
        case "3-4":
          drawExerciseText("Elbow 4/4", 10, "5~10", [
            "將前臂至於桌邊，手腕伸出桌緣。輕握拳，拳眼朝上，",
            "先維持手腕於正中位置，手腕（即小指側）往上屈曲。",
            "每10秒休息5秒。",
          ]);
          setupExercise(
            10,
            15,
            [images["Ex42"], images["Ex43"], images["Ex44"], images["Ex45"]],
            [9, 10, 14, 15],
            null,
            true
          );
          startExercise();
          break;
      }
      break;
  }
  drawButtons();
}

// 設定運動頁面參數與繪製畫面
function setupExercise(
  numRound,
  seconds,
  picArr,
  periodArr,
  nextThemePage,
  breakTime
) {
  let _bkt = breakTime || false;
  mainCtx.drawImage(picArr[0], mainCanvas.width * 0.7 - 80, 120, 473, 564);

  mainCtx.font = "70px NotoSansTC-Light";
  mainCtx.textBaseline = "top";
  mainCtx.textAlign = "center";
  mainCtx.fillStyle = "#D17C7C";
  if (_bkt) {
    mainCtx.fillText(
      seconds - 5,
      30 + (mainCanvas.width * 0.6) / 2,
      middleY - 70
    );
  } else {
    mainCtx.fillText(seconds, 30 + (mainCanvas.width * 0.6) / 2, middleY - 70);
  }

  exercisParameter = {
    status: "init",
    ruond: numRound,
    totalTime: seconds * 1000, // to ms
    pics: picArr,
    periodArr: periodArr.map((p) => p * 1000),
    next: nextThemePage,
  };
}

// 開始運動，執行動畫
function startExercise() {
  exercisParameter.status = "run";
  finishedRound = 0;
  start = null;
  animattionIndex = 0;
  window.requestAnimationFrame(updateExercise);
}

// 恢復運動
function resumeExercise() {
  exercisParameter.status = "run";
  start = null;
  animattionIndex = 0;
  window.requestAnimationFrame(updateExercise);
}

// 根據時間更新運動動畫
var start = null;
var animattionIndex = 0;
var finishedRound = 0;
var _backupValue = 0;
function updateExercise(timestamp) {
  if (exercisParameter.status == "run") {
    if (!start) start = timestamp;
    let progress = timestamp - start;

    // update frame
    let picX = mainCanvas.width * 0.7 - 80;
    let picY = 120;

    mainCtx.fillStyle = "#EBF5FA";
    mainCtx.fillRect(
      picX,
      picY,
      mainCanvas.width - picX - 40,
      mainCanvas.height - picY - 40
    );

    mainCtx.fillStyle = "#E4E8EA";
    mainCtx.fillRect((mainCanvas.width * 0.6) / 2 - 90, middleY - 75, 180, 90);

    mainCtx.drawImage(
      exercisParameter.pics[animattionIndex],
      picX,
      picY,
      473,
      564
    );

    mainCtx.fillStyle = "#D17C7C";
    let second = 0;
    // 肩頸運動第三步驟為計數方式
    if (state.theme == "exercise" && state.page == "2-3") {
      let _count = animattionIndex; // 0~11
      if (_count >= 6) {
        _count -= 6;
      }
      if (_count % 2) {
        second = Math.ceil(Math.sqrt(_count));
        _backupValue = second;
      } else {
        second = _backupValue;
      }
    }
    // 網球肘需要5秒休息時間
    else if (state.theme == "exercise" && state.page.split("-")[0] == "3") {
      second =
        Math.floor((exercisParameter.totalTime - progress) / 1000) + 1 - 5;
      mainCtx.fillStyle = "#E4E8EA";
      mainCtx.fillRect(30, 140, mainCanvas.width * 0.6 - 30, 40);
      mainCtx.textBaseline = "middle";
      mainCtx.textAlign = "center";
      mainCtx.fillStyle = "#808080";
      mainCtx.font = "34px NotoSansTC-Light";
      if (second <= 0) {
        mainCtx.fillText(
          "10 秒 / 休息",
          30 + (mainCanvas.width * 0.6) / 2,
          160
        );
        second = 5 - Math.abs(second);
      } else {
        mainCtx.fillText(
          "10 秒 / 5~10 次",
          30 + (mainCanvas.width * 0.6) / 2,
          160
        );
        mainCtx.fillStyle = "#D17C7C";
      }
    } else {
      mainCtx.fillStyle = "#D17C7C";
      second = Math.floor((exercisParameter.totalTime - progress) / 1000) + 1;
      if (second < 0) second = 0;
    }

    mainCtx.font = "70px NotoSansTC-Light";
    mainCtx.textBaseline = "top";
    mainCtx.textAlign = "center";
    mainCtx.fillText(second, 30 + (mainCanvas.width * 0.6) / 2, middleY - 70);
    if (
      progress >= exercisParameter.periodArr[animattionIndex] &&
      animattionIndex < exercisParameter.pics.length - 1
    ) {
      animattionIndex++;
    }

    // 若時間尚未完成，繼續更新動畫
    if (progress < exercisParameter.totalTime) {
      window.requestAnimationFrame(updateExercise);
    } else {
      finishedRound++;
      if (finishedRound >= exercisParameter.ruond) {
        // 判斷完成運動後，自動轉跳下一步
        if (exercisParameter.next) {
          changeThemePage(
            exercisParameter.next.theme,
            exercisParameter.next.page
          );
        } else {
          // 完成運動提示畫面
          updateDialog = finishExerciseDialog;
          updateDialog();
          showDialog();
        }
      } else {
        start = null;
        animattionIndex = 0;
        window.requestAnimationFrame(updateExercise);
      }
    }
  }
}

// 若畫面縮放呼叫此function，更新畫面物件相對位置
function redraw() {
  let newWidth = window.innerWidth < MIN_WIDTH ? MIN_WIDTH : window.innerWidth;
  let newHeight =
    window.innerHeight < MIN_HEIGHT ? MIN_HEIGHT : window.innerHeight;

  if (mainCanvas.width != newWidth || mainCanvas.height != newHeight) {
    mainCanvas.width = newWidth;
    mainCanvas.height = newHeight;
    dialogCanvas.width = newWidth;
    dialogCanvas.height = newHeight;
    gameCanvas.width = 1266;
    gameCanvas.height = newHeight - 140;
    middleX = mainCanvas.width / 2;
    middleY = mainCanvas.height / 2;
    updateComponentPosition();
    updateTheme();
    if (updateDialog) updateDialog();
  }
}

// 設定背景顏色
function setBackGround() {
  if (state.theme == "tasty") {
    mainCtx.fillStyle = "#B2CA9D";
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  } else {
    mainCtx.fillStyle = "#9BCAE5";
    mainCtx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
  }
}

// 繪製圓角矩形
function roundRect(ctx, x, y, width, height, radius, boardOnly) {
  if (typeof radius === "undefined") {
    radius = 5;
  }
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
  }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (boardOnly) {
    ctx.stroke();
  } else {
    ctx.fill();
  }
}

// 繪製icon
function drawIcon(sharp, x, y, w, h) {
  mainCtx.fillStyle = "#fff";
  mainCtx.strokeStyle = "#fff";
  switch (sharp) {
    case "X":
      mainCtx.lineWidth = 5;
      mainCtx.beginPath();
      mainCtx.moveTo(x, y);
      mainCtx.lineTo(x + w, y + h);
      mainCtx.stroke();
      mainCtx.beginPath();
      mainCtx.moveTo(x, y + h);
      mainCtx.lineTo(x + w, y);
      mainCtx.stroke();
      break;
    case "<":
      mainCtx.beginPath();
      mainCtx.moveTo(x + w, y);
      mainCtx.lineTo(x, y + h / 2);
      mainCtx.lineTo(x + w, y + h);
      mainCtx.closePath();
      mainCtx.fill();
      break;
    case ">":
      mainCtx.beginPath();
      mainCtx.moveTo(x, y);
      mainCtx.lineTo(x + w, y + h / 2);
      mainCtx.lineTo(x, y + h);
      mainCtx.closePath();
      mainCtx.fill();
      break;
    case "||":
      mainCtx.lineWidth = 5;
      mainCtx.beginPath();
      mainCtx.moveTo(x + w / 4, y);
      mainCtx.lineTo(x + w / 4, y + h);
      mainCtx.stroke();
      mainCtx.beginPath();
      mainCtx.moveTo(x + (w / 4) * 3, y);
      mainCtx.lineTo(x + (w / 4) * 3, y + h);
      mainCtx.stroke();
      break;
    case "=":
      mainCtx.lineWidth = 5;
      mainCtx.beginPath();
      mainCtx.moveTo(x, y + 6);
      mainCtx.lineTo(x + w, y + 6);
      mainCtx.stroke();
      mainCtx.beginPath();
      mainCtx.moveTo(x, y + h / 2 + 4);
      mainCtx.lineTo(x + w, y + h / 2 + 4);
      mainCtx.stroke();
      mainCtx.beginPath();
      mainCtx.moveTo(x, y + h + 2);
      mainCtx.lineTo(x + w, y + h + 2);
      mainCtx.stroke();
      break;
    case "+":
      roundRect(mainCtx, x, y + 4, w, h, 5);
      mainCtx.strokeStyle = "#9BCAE5";
      mainCtx.beginPath();
      mainCtx.moveTo(x + 5, y + h / 2 + 4);
      mainCtx.lineTo(x + w - 5, y + h / 2 + 4);
      mainCtx.stroke();
      mainCtx.beginPath();
      mainCtx.moveTo(x + w / 2, y + 9);
      mainCtx.lineTo(x + w / 2, y + h - 1);
      mainCtx.stroke();
      break;
    default:
      break;
  }
}

// 繪製按鈕(可互動元件)
function drawButtons() {
  buttons.forEach((btn) => {
    if (btn.belong.theme == state.theme && btn.belong.page == state.page) {
      switch (btn.sharp) {
        case "normal":
        default:
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "top";
          mainCtx.textAlign = "left";
          mainCtx.fillText(
            btn.text,
            btn.position.x +
              btn.size.width / 2 -
              (btn.font.size * btn.text.length) / 2,
            btn.position.y + btn.size.heigth / 2 - btn.font.size / 2 + 3
          );
          break;
        case "conditionDisplayBtn":
          if (btn.condition()) {
            mainCtx.fillStyle = btn.color || "white";
            roundRect(
              mainCtx,
              btn.position.x,
              btn.position.y,
              btn.size.width,
              btn.size.heigth,
              10
            );
            mainCtx.font = btn.font.size + "px " + btn.font.family;
            mainCtx.fillStyle = btn.font.color;
            mainCtx.textBaseline = "top";
            mainCtx.textAlign = "left";
            mainCtx.fillText(
              btn.text,
              btn.position.x +
                btn.size.width / 2 -
                (btn.font.size * btn.text.length) / 2,
              btn.position.y + btn.size.heigth / 2 - btn.font.size / 2 + 3
            );
          }
          break;
        case "conditionDisplayBtn_build":
          if (btn.condition()) {
            if (state.gameObjects.stars >= NUM_SUB_STAR) {
              mainCtx.fillStyle = "rgba(85, 85, 85,0.3)";
              roundRect(
                mainCtx,
                btn.position.x + 3,
                btn.position.y + 3,
                btn.size.width,
                btn.size.heigth,
                10
              );
            }
            mainCtx.fillStyle = btn.color || "white";
            roundRect(
              mainCtx,
              btn.position.x,
              btn.position.y,
              btn.size.width,
              btn.size.heigth,
              10
            );

            mainCtx.font = btn.font.size + "px " + btn.font.family;
            mainCtx.fillStyle = btn.font.color;
            mainCtx.textBaseline = "top";
            mainCtx.textAlign = "left";
            mainCtx.fillText(
              btn.text,
              btn.position.x +
                btn.size.width / 2 -
                mainCtx.measureText(btn.text).width / 2,
              btn.position.y + btn.size.heigth / 2 - btn.font.size / 2 + 3
            );
          }
          break;
        case "themeSelector_l":
          mainCtx.fillStyle = "#555555";
          mainCtx.fillRect(middleX - 10, 20, 20, 60);

          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth / 2
          );
          break;
        case "themeSelector_r":
          mainCtx.fillStyle = "#555555";
          mainCtx.fillRect(middleX - 10, 20, 20, 60);

          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.font = btn.font.size + "px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth / 2
          );
          break;
        case "imageBtn":
          mainCtx.fillStyle = "rgba(85, 85, 85, 0.3)";
          roundRect(
            mainCtx,
            btn.position.x + 4,
            btn.position.y + 4,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.fillStyle = btn.color || "white";
          roundRect(
            mainCtx,
            btn.position.x,
            btn.position.y,
            btn.size.width,
            btn.size.heigth,
            10
          );
          mainCtx.drawImage(
            images[btn.img.src],
            btn.position.x + 20,
            btn.position.y,
            btn.img.size.width,
            btn.img.size.height
          );
          mainCtx.font = "38px " + btn.font.family;
          mainCtx.fillStyle = btn.font.color;
          mainCtx.textBaseline = "middle";
          mainCtx.textAlign = "center";
          mainCtx.fillText(
            btn.text,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth - 80
          );

          mainCtx.font = "32px " + btn.font.family;
          mainCtx.fillText(
            btn.subText,
            btn.position.x + btn.size.width / 2,
            btn.position.y + btn.size.heigth - 30
          );
          break;
        case "iconBtn":
          if (btn.icon.direction == "left") {
            drawIcon(
              btn.icon.sharp,
              btn.position.x,
              btn.position.y,
              btn.icon.size.w,
              btn.icon.size.h
            );
            if (btn.showText) {
              mainCtx.font = btn.font.size + "px " + btn.font.family;
              mainCtx.fillStyle = btn.font.color;
              mainCtx.textBaseline = "middle";
              mainCtx.textAlign = "left";
              mainCtx.fillText(
                btn.text,
                btn.position.x + btn.icon.size.w + 10,
                btn.position.y + 18
              );
            }
          } else {
            drawIcon(
              btn.icon.sharp,
              btn.position.x + btn.size.width - btn.icon.size.w,
              btn.position.y,
              btn.icon.size.w,
              btn.icon.size.h
            );
            if (btn.showText) {
              mainCtx.font = btn.font.size + "px " + btn.font.family;
              mainCtx.fillStyle = btn.font.color;
              mainCtx.textBaseline = "middle";
              mainCtx.textAlign = "left";
              mainCtx.fillText(
                btn.text,
                btn.position.x - 10,
                btn.position.y + 18
              );
            }
          }
          break;
        case "background":
          break;
      }
    }
  });
}

// 顯示提示視窗
function showDialog() {
  dialogCanvas.style.zIndex = 3;
}

// 關閉提示視窗
function closeDialog() {
  dialogCtx.clearRect(0, 0, dialogCanvas.width, dialogCanvas.height);
  dialogButtons = [];
  updateDialog = null;
  dialogCanvas.style.zIndex = -1;
}

// 設定轉跳頁面
function changeThemePage(toTheme, toPage) {
  state.theme = toTheme;
  state.page = toPage;
  updateTheme();
}

// 定義主畫面點擊事件
mainCanvas.addEventListener("click", function (e) {
  let _theme = state.theme;
  let _page = state.page;
  buttons.forEach((btn) => {
    if (_theme == btn.belong.theme && _page == btn.belong.page) {
      if (
        e.layerX <= btn.position.x + btn.size.width &&
        e.layerX >= btn.position.x &&
        e.layerY >= btn.position.y &&
        e.layerY <= btn.position.y + btn.size.heigth
      ) {
        if (btn.condition) {
          if (!btn.condition()) return;
        }
        if (btn.action) {
          btn.action();
          localStorage.setItem("state", JSON.stringify(state));
        }
      }
    }
  });
});

// 定義提示視窗點擊事件
dialogCanvas.addEventListener("click", function (e) {
  if (dialogButtons.length > 0) {
    dialogButtons.forEach((btn) => {
      if (
        e.layerX <= btn.range.x + btn.range.w &&
        e.layerX >= btn.range.x &&
        e.layerY <= btn.range.y + btn.range.h &&
        e.layerY >= btn.range.y
      )
        if (btn.action) {
          btn.action();
          localStorage.setItem("state", JSON.stringify(state));
        }
    });
  }
});

// 定義遊戲畫面點擊事件
gameCanvas.addEventListener("click", function (e) {
  if (gameButtons.length > 0) {
    gameButtons.forEach((btn) => {
      let _x = 0;
      let _y = 0;
      if (navigator.userAgent.indexOf("Chrome") != -1) {
        // chrome
        _x = e.offsetX;
        _y = e.offsetY;
      } else {
        // other
        _x = e.layerX;
        _y = e.layerY;
      }

      if (
        _x <= btn.range.x + btn.range.w &&
        _x >= btn.range.x &&
        _y <= btn.range.y + btn.range.h &&
        _y >= btn.range.y
      ) {
        if (btn.action) {
          btn.action();
          localStorage.setItem("state", JSON.stringify(state));
        }
      }
    });
  }
});

// 定義按鍵功能內容
// Buttons Action Define
// 主畫面開始按鈕功能
function startBtnAction() {
  if (!resLoaded) {
    console.log("Loading...");
    alert("資料讀取中，請稍候...");
    return;
  }

  if (state.firstUse.health) {
    changeThemePage("home", "intro");
  } else {
    changeThemePage("health", "main");
  }
}

// 設定提示畫面透明背景
function dialogShadow(alpha) {
  let _a = alpha || 0.5;
  dialogCtx.fillStyle = "rgba(85, 85, 85," + _a + ")";
  dialogCtx.fillRect(0, 0, dialogCanvas.width, dialogCanvas.height);
}

// 繪製提示視窗按鈕
function drawDialogButton(x, y, w, h, text) {
  roundRect(dialogCtx, x, y, w, h, 10);
  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textAlign = "left";
  let ww = dialogCtx.measureText(text).width;
  dialogCtx.fillText(text, x + (w - ww) / 2, y + (h - 36) / 2);
}

// 顯示內容頁面
function showContentDialog() {
  dialogShadow(0.8);

  dialogCtx.font = "40px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("內容", middleX, 50);

  dialogCtx.fillStyle = "F5F5F5";
  let boxPosY = (dialogCanvas.height - 80) / 2 - 249;
  if (boxPosY < 65) boxPosY = 65;
  let box1PosX = middleX - 535;
  let box2PosX = middleX - 175;
  let box3PosX = middleX + 185;

  roundRect(dialogCtx, box1PosX, boxPosY, 350, 510, 10);
  roundRect(dialogCtx, box2PosX, boxPosY, 350, 510, 10);
  roundRect(dialogCtx, box3PosX, boxPosY, 350, 510, 10);

  dialogCtx.drawImage(images["W02"], box1PosX + 30, boxPosY + 40);
  dialogCtx.drawImage(images["W03"], box2PosX + 20, boxPosY + 40);
  dialogCtx.drawImage(images["W04"], box3PosX + 30, boxPosY + 40);

  dialogCtx.fillStyle = "#555555";
  dialogCtx.font = "34px NotoSansTC-Light";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("腕隧道症候群", box1PosX + 175, boxPosY + 34);
  dialogCtx.fillText("肩頸痠痛", box2PosX + 175, boxPosY + 34);
  dialogCtx.fillText("網球肘", box3PosX + 175, boxPosY + 34);

  dialogCtx.font = "18px NotoSansTC-Light";
  dialogCtx.textAlign = "left";
  let textYbase = 310;
  let textHeight = 20;

  dialogCtx.fillText(
    "腕隧道症候群是一種常見的疾病，會導",
    box1PosX + 15,
    boxPosY + textYbase
  );
  dialogCtx.fillText(
    "致手和手臂疼痛、麻木和刺痛。",
    box1PosX + 15,
    boxPosY + textYbase + textHeight
  );
  dialogCtx.fillText(
    "當手的主要神經之一-正中神經-受到擠",
    box1PosX + 15,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "壓或壓縮時，就會出現這種情況。",
    box1PosX + 15,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "症狀通常可以通過簡單的措施得到緩",
    box1PosX + 15,
    boxPosY + textYbase + textHeight * 6
  );
  dialogCtx.fillText(
    "解和預防。",
    box1PosX + 15,
    boxPosY + textYbase + textHeight * 7
  );

  dialogCtx.fillText(
    "肌筋膜頸部疼痛是頸肩部慢性疼痛的常",
    box2PosX + 15,
    boxPosY + textYbase
  );
  dialogCtx.fillText(
    "見原因。",
    box2PosX + 15,
    boxPosY + textYbase + textHeight
  );
  dialogCtx.fillText(
    "頸部肌肉的過度使用或創傷，以及壓力",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "和姿勢，都可能導致頸部/肩部的肌筋",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "膜疼痛。",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 5
  );
  dialogCtx.fillText(
    "對於整天在辦公桌前工作並且在使用計",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 7
  );
  dialogCtx.fillText(
    "算機時操作不當的患者。肌肉可能因過",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 8
  );
  dialogCtx.fillText(
    "度使用或受傷而變得緊繃或發炎。",
    box2PosX + 15,
    boxPosY + textYbase + textHeight * 9
  );

  dialogCtx.fillText(
    "網球肘是一種導致肘部外側疼痛的疾病。",
    box3PosX + 15,
    boxPosY + textYbase
  );
  dialogCtx.fillText(
    "它經常發生在肘關節附近的前臂肌肉過",
    box3PosX + 15,
    boxPosY + textYbase + textHeight * 2
  );
  dialogCtx.fillText(
    "度使用或重複動作之後。",
    box3PosX + 15,
    boxPosY + textYbase + textHeight * 3
  );
  dialogCtx.fillText(
    "可能會注意到肘部外側疼痛，您可能還",
    box3PosX + 15,
    boxPosY + textYbase + textHeight * 4
  );
  dialogCtx.fillText(
    "會發現難以完全伸展手臂。",
    box3PosX + 15,
    boxPosY + textYbase + textHeight * 5
  );
  dialogCtx.fillText(
    "網球肘不治療會好起來的。",
    box3PosX + 15,
    boxPosY + textYbase + textHeight * 7
  );

  let btnPosX = middleX - 100;
  let btnPosY = boxPosY + 556;
  if (btnPosY > dialogCanvas.height - 80) btnPosY = dialogCanvas.height - 80;

  dialogCtx.fillStyle = "#73A5BE";
  drawDialogButton(btnPosX, btnPosY, 200, 70, "確　定");
  dialogButtons.push({
    range: {
      x: btnPosX,
      y: btnPosY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
      state.firstUse.health = false;
    },
  });
}

// 顯示開始運動提示視窗
function showStartExerciseDialog() {
  let middleX = dialogCanvas.width / 2;
  let middleY = dialogCanvas.height / 2;

  dialogShadow();

  dialogCtx.fillStyle = "rgba(70, 70, 70, 0.9)";

  dialogCtx.beginPath();
  dialogCtx.arc(middleX, middleY, 150, 0, Math.PI * 2, true);
  dialogCtx.fill();

  dialogCtx.font = "40px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";

  dialogCtx.fillText("開　始", middleX, middleY - 50);
  dialogCtx.fillText("START", middleX, middleY + 50);

  dialogButtons.push({
    range: {
      x: middleX - 150,
      y: middleY - 150,
      w: 300,
      h: 300,
    },
    action: function () {
      closeDialog();
      if (exercisParameter.status == "pause") {
        resumeExercise();
      } else {
        startExercise();
      }
    },
  });
}

// 顯示準備運動提示視窗
function showReadyExerciseDialog() {
  let exerciseName = dialogParameters.exerciseName || "";
  let numPart = dialogParameters.numPart || "";
  let seconds = dialogParameters.seconds || "";
  dialogShadow();

  dialogCtx.fillStyle = "rgba(70, 70, 70, 0.9)";
  roundRect(dialogCtx, middleX - 400, middleY - 250, 800, 500, 10);

  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  let baseY = middleY - 180;
  let step = 42;
  dialogCtx.fillText(exerciseName + "運動將花約 5 分鐘，", middleX, baseY);
  dialogCtx.fillText(
    "共" + numPart + "部分，每部分約" + seconds + "秒，",
    middleX,
    baseY + step
  );
  dialogCtx.fillText("請自行做適量舒緩。", middleX, baseY + step * 2);
  dialogCtx.fillText(
    "完成動作後，觸摸屏幕將進入下一步。",
    middleX,
    baseY + step * 4
  );
  dialogCtx.fillStyle = "#D17C7C";
  dialogCtx.fillText("若感到不適，請立即停止。", middleX, baseY + step * 6);

  dialogCtx.fillStyle = "#73A5BE";

  let BtnX = middleX - 100;
  let BtnY = baseY + step * 8 - 20;
  drawDialogButton(BtnX, BtnY, 200, 70, "確　定");

  dialogButtons.push({
    range: {
      x: BtnX,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      state.firstUse.exersise[dialogParameters.index] = false;
      closeDialog();
      updateDialog = showStartExerciseDialog;
      updateDialog();
      showDialog();
    },
  });
}

// 確認離開提示視窗
function confirmExitDialog() {
  exercisParameter.status = "pause";

  let middleX = dialogCanvas.width / 2;
  let middleY = dialogCanvas.height / 2;
  dialogCtx.fillStyle = "rgba(85, 85, 85, 0.5)";
  roundRect(dialogCtx, 0, 0, dialogCanvas.width, dialogCanvas.height);

  dialogCtx.fillStyle = "rgba(70, 70, 70, 0.9)";
  roundRect(dialogCtx, middleX - 400, middleY - 250, 800, 500);

  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  let baseY = middleY - 80;
  let step = 42;
  dialogCtx.fillText("若現在關閉，將不會得到", middleX - 47, baseY);
  dialogCtx.drawImage(images["W05"], middleX + 155, baseY - 35, 60, 60);
  dialogCtx.fillText("。", middleX + 230, baseY);

  dialogCtx.fillStyle = "#FFAFAF";
  dialogCtx.fillText("若感到不適，請立即停止。", middleX, baseY + step * 3);

  dialogCtx.fillStyle = "#73A5BE";
  let Btn1X = middleX + 20;
  let Btn2X = middleX - 220;
  let BtnY = baseY + step * 5;
  roundRect(dialogCtx, Btn1X, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#A7A7A7";
  roundRect(dialogCtx, Btn2X, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#FFF";
  dialogCtx.font = "34px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.textAlign = "left";
  dialogCtx.fillText("繼　續", Btn1X + 46, BtnY + 20);
  dialogCtx.fillText("離　開", Btn2X + 46, BtnY + 20);

  dialogButtons.push({
    range: {
      x: Btn1X,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
      resumeExercise();
    },
  });
  dialogButtons.push({
    range: {
      x: Btn2X,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
      changeThemePage("health", "main");
    },
  });
}

// 顯示星星不足提示視窗
function noStarDialog() {
  dialogCtx.fillStyle = "#464646";
  roundRect(dialogCtx, middleX - 350, middleY - 115, 700, 230, 10);
  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.drawImage(images["W05"], middleX - 240, middleY - 85, 60, 60);
  dialogCtx.fillText("不足,可透過做舒緩運動獲得。", middleX + 60, middleY - 50); //470

  dialogCtx.fillStyle = "#88A073";
  let BtnX = middleX - 100;
  let BtnY = middleY + 10;
  roundRect(dialogCtx, BtnX, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#FFF";
  dialogCtx.font = "34px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.textAlign = "left";
  dialogCtx.fillText("確　定", BtnX + 46, BtnY + 20);

  dialogButtons.push({
    range: {
      x: BtnX,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
    },
  });
}

// 詢問是否建造提示視窗
function confirmBuildDialog() {
  dialogCtx.fillStyle = "#464646";
  roundRect(dialogCtx, middleX - 350, middleY - 115, 700, 230, 10);
  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("確定消耗　　在您的城市新建餐館?", middleX, middleY - 50);
  dialogCtx.drawImage(images["W05"], middleX - 125, middleY - 85, 60, 60);

  dialogCtx.fillStyle = "#88A073";
  let Btn1X = middleX + 20;
  let Btn2X = middleX - 220;
  let BtnY = middleY + 10;
  roundRect(dialogCtx, Btn1X, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#A7A7A7";
  roundRect(dialogCtx, Btn2X, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#FFF";
  dialogCtx.font = "34px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.textAlign = "left";
  dialogCtx.fillText("確　定", Btn1X + 46, BtnY + 20);
  dialogCtx.fillText("取　消", Btn2X + 46, BtnY + 20);

  dialogButtons.push({
    range: {
      x: Btn2X,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
    },
  });

  dialogButtons.push({
    range: {
      x: Btn1X,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      if (state.gameObjects.storeList.length == 0) {
        alert("沒有可建的新商店！");
        return;
      }

      function checkNeighbor(x, y) {
        return (
          (state.gameObjects.maps[x + 1] != undefined &&
            state.gameObjects.maps[x + 1][y].store != 0) ||
          (state.gameObjects.maps[x][y + 1] != undefined &&
            state.gameObjects.maps[x][y + 1].store != 0) ||
          (state.gameObjects.maps[x - 1] != undefined &&
            state.gameObjects.maps[x - 1][y].store != 0) ||
          (state.gameObjects.maps[x][y - 1] != undefined &&
            state.gameObjects.maps[x][y - 1].store != 0)
        );
      }

      let _map = state.gameObjects.maps;
      let _selectPool = [];
      for (let i = 0; i < _map.length; i++) {
        for (let j = 0; j < _map[0].length; j++) {
          if (_map[i][j].store == 0 && checkNeighbor(i, j)) {
            _selectPool.push({ x: j, y: i });
          }
        }
      }

      let selectIndex = Math.floor(Math.random() * _selectPool.length);
      let x = _selectPool[selectIndex].x;
      let y = _selectPool[selectIndex].y;
      let newStoreIndex = Math.floor(
        Math.random() * state.gameObjects.storeList.length
      );
      state.gameObjects.maps[y][x].store =
        state.gameObjects.storeList[newStoreIndex];
      state.gameObjects.maps[y][x].state = "new";
      determineGameZomePosition(-(x * 180) + 360, -(y * 150) + 150);
      updateBoundary(x, y);
      updateGameZone();
      state.gameObjects.stars -= NUM_SUB_STAR;
      let _listS = state.gameObjects.storeList.slice(0, newStoreIndex);
      let _listE = state.gameObjects.storeList.slice(newStoreIndex + 1);
      state.gameObjects.storeList = _listS.concat(_listE);
      mainCtx.fillStyle = "#B2CA9D";
      mainCtx.fillRect(middleX - 480, 20, 100, 60);
      mainCtx.font = "32px NotoSansTC-Light";
      mainCtx.fillStyle = "#FFF";
      mainCtx.textBaseline = "middle";
      mainCtx.textAlign = "center";
      mainCtx.fillText(state.gameObjects.stars, middleX - 430, 50);
      drawButtons();
      closeDialog();
    },
  });
}

var selectBtnOpen = false;
// 繪製地區選擇選單
function drawSelectMenu() {
  dialogCtx.fillStyle = "#464646";
  roundRect(dialogCtx, middleX - 250, middleY - 125, 500, 250, 10);
  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("選擇地區", middleX, middleY - 70);
  dialogCtx.fillStyle = "#c5c5c5";
  roundRect(dialogCtx, middleX - 150, middleY - 40, 300, 50);

  dialogCtx.textAlign = "left";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.fillText("台南市", middleX - 140, middleY - 10);

  dialogCtx.fillStyle = "#464646";
  dialogCtx.beginPath();
  dialogCtx.moveTo(middleX + 110, middleY - 30);
  dialogCtx.lineTo(middleX + 140, middleY - 30);
  dialogCtx.lineTo(middleX + 125, middleY);
  dialogCtx.closePath();
  dialogCtx.fill();

  let btnX = middleX - 90;
  let btnY = middleY + 50;
  dialogCtx.fillStyle = "#88A073";

  roundRect(dialogCtx, btnX, btnY, 180, 50);
  dialogCtx.fillStyle = "#fff";
  dialogCtx.fillText("確　定", btnX + 36, btnY + 25);
}

// 顯示地區選擇提示視窗
function areaSelectDialog() {
  dialogCtx.fillStyle = "rgba(85, 85, 85, 0.5)";
  dialogCtx.fillRect(0, 0, dialogCanvas.width, dialogCanvas.height);
  drawSelectMenu();

  dialogButtons.push({
    range: {
      x: middleX - 150,
      y: middleY - 20,
      w: 300,
      h: 50,
    },
    action: function () {
      if (selectBtnOpen) {
        drawSelectMenu();
      } else {
        dialogCtx.fillStyle = "#c5c5c5";
        roundRect(dialogCtx, middleX - 150, middleY, 300, 50);

        dialogCtx.textAlign = "left";
        dialogCtx.fillStyle = "#FFF";
        dialogCtx.font = "36px NotoSansTC-Light";
        dialogCtx.fillText("尚未開放", middleX - 140, middleY + 30);
        dialogCtx.strokeStyle = "#464646";
        dialogCtx.beginPath();
        dialogCtx.moveTo(middleX - 140, middleY + 5);
        dialogCtx.lineTo(middleX + 140, middleY + 5);
        dialogCtx.stroke();
      }
      selectBtnOpen = !selectBtnOpen;
    },
  });
  dialogButtons.push({
    range: {
      x: middleX - 90,
      y: middleY + 50,
      w: 180,
      h: 50,
    },
    action: function () {
      closeDialog();
      updateDialog = tastyGuideDialog;
      updateDialog();
      showDialog();
    },
  });
}

// 顯示tasty指引畫面
function tastyGuideDialog() {
  dialogShadow();

  let x = middleX - 370;

  dialogCtx.fillStyle = "#fff";
  dialogCtx.beginPath();
  dialogCtx.moveTo(x + 30, 150);
  dialogCtx.lineTo(x + 70, 150);
  dialogCtx.lineTo(x + 50, 110);
  dialogCtx.fill();

  let _baseY = 180;
  let _step = 40;
  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  dialogCtx.fillText("點擊消耗三點，", x + 60, _baseY);
  dialogCtx.fillText("將可以在地圖上新增餐館，", x + 60, _baseY + _step);
  dialogCtx.fillText("並獲得推薦。", x + 60, _baseY + _step * 2);

  dialogCtx.beginPath();
  dialogCtx.moveTo(dialogCanvas.width / 2 - 20, 380);
  dialogCtx.lineTo(dialogCanvas.width / 2 + 20, 380);
  dialogCtx.lineTo(dialogCanvas.width / 2, 420);
  dialogCtx.fill();

  _baseY = 300;
  dialogCtx.fillText("地圖起點，", dialogCanvas.width / 2, _baseY);
  dialogCtx.fillText(
    "地圖可以上下左右進行滑動。",
    dialogCanvas.width / 2,
    _baseY + _step
  );

  dialogButtons.push({
    range: {
      x: 0,
      y: 0,
      w: dialogCanvas.width,
      h: dialogCanvas.height,
    },
    action: function () {
      closeDialog();
    },
  });
}

// 完成運動提示視窗
function finishExerciseDialog() {
  exercisParameter.status = "stop";
  state.gameObjects.stars += NUM_ADD_STAR;

  dialogShadow();

  dialogCtx.fillStyle = "rgba(70, 70, 70, 0.9)";
  roundRect(dialogCtx, middleX - 400, middleY - 250, 800, 500);

  dialogCtx.font = "36px NotoSansTC-Light";
  dialogCtx.fillStyle = "#FFF";
  dialogCtx.textBaseline = "middle";
  dialogCtx.textAlign = "center";
  let baseY = middleY - 140;
  let step = 70;
  dialogCtx.fillText(
    '您已完成"' + dialogParameters.exerciseName + '"',
    middleX,
    baseY
  );
  dialogCtx.fillText("恭喜獲得", middleX - 47, baseY + step);
  dialogCtx.drawImage(images["W05"], middleX + 40, baseY + step - 50);

  dialogCtx.fillStyle = "#FFAFAF";
  dialogCtx.fillText(
    "請先休息，不要馬上開始其他項目。",
    middleX,
    baseY + step * 3
  );

  dialogCtx.fillStyle = "#73A5BE";
  let BtnX = middleX - 100;
  let BtnY = baseY + step * 4;
  roundRect(dialogCtx, BtnX, BtnY, 200, 70, 10);

  dialogCtx.fillStyle = "#FFF";
  dialogCtx.font = "34px NotoSansTC-Light";
  dialogCtx.textBaseline = "top";
  dialogCtx.textAlign = "left";
  dialogCtx.fillText("確　定", BtnX + 46, BtnY + 20);

  dialogButtons.push({
    range: {
      x: BtnX,
      y: BtnY,
      w: 200,
      h: 70,
    },
    action: function () {
      closeDialog();
      changeThemePage("health", "main");
    },
  });
}

// 顯示商店資訊卡
function showStoreInfoDialog() {
  dialogShadow();
  let picNum = dialogParameters.picNum;
  dialogCtx.drawImage(
    images["B" + picNum],
    middleX - 368,
    middleY - 231,
    737,
    463
  ); //1474*926 -/2> 737*463

  let btnX = middleX - 286;
  let btnY = middleY + 141;
  dialogCtx.fillStyle = "#88A073";
  drawDialogButton(btnX, btnY, 200, 70, "確　定");
  dialogButtons.push({
    range: {
      x: btnX,
      y: btnY,
      w: 200,
      h: 70,
    },
    action: () => {
      closeDialog();
    },
  });
}

// 介紹頁確認按鈕
function intorBtnAction() {
  changeThemePage("health", "main");
  if (state.firstUse.health) {
    updateDialog = showContentDialog;
    updateDialog();
    showDialog();
  }
}

// Tasty介紹頁確認按鈕
function tastyIntorBtnAction() {
  state.firstUse.tasty = false;
  changeThemePage("tasty", "main");
  updateDialog = areaSelectDialog;
  updateDialog();
  showDialog();
}

// 定義畫面內容
// Theme Define
// 繪製主頁面
function drawHome() {
  mainCtx.font = "78px NotoSansTC-Light";
  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  let txt = "Work ? out !";
  mainCtx.fillText(txt, middleX + 30, middleY);

  images["W07"].addEventListener("load", () => {
    mainCtx.drawImage(images["W07"], middleX - 240, middleY - 40);
  });
  mainCtx.drawImage(images["W07"], middleX - 240, middleY - 40); //36*112

  mainCtx.font = "28px NotoSansTC-Light";
  mainCtx.fillText(
    "Muscle Soothe for Office Worker",
    middleX + 30,
    middleY + 50
  );
}

// 繪製介紹頁
function drawIntro() {
  let _x = (middleX - 650) / 2;
  mainCtx.drawImage(images["W01"], middleX + _x, middleY - 280); //580*560

  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";

  mainCtx.font = "40px NotoSansTC-Light";
  mainCtx.fillText("介 紹", middleX, 50);

  let _y = middleY - 150;
  mainCtx.font = "46px NotoSansTC-Light";
  mainCtx.textAlign = "left";
  mainCtx.fillText('關於 "Work ? out !"', _x, _y);

  let baseY = _y + 50;
  let linStep = 40;
  mainCtx.font = "26px NotoSansTC-Light";
  mainCtx.fillText(
    "現今上班族與學生族群，都經常坐著辦公或讀書，不斷的",
    _x,
    baseY
  );
  mainCtx.fillText(
    "長時間重複某一特定動作，長時間坐著的上班族「電腦症",
    _x,
    baseY + linStep
  );
  mainCtx.fillText(
    "候群」因姿勢、長時間打電腦或接電話，衍伸出毛病如：",
    _x,
    baseY + linStep * 2
  );
  mainCtx.fillText("手腕、肩頸及手肘痠痛。", _x, baseY + linStep * 3);
  mainCtx.fillText(
    '"Work? Out!"則是以簡單的肌肉舒緩運動幫助使用者預防',
    _x,
    baseY + linStep * 4
  );
  mainCtx.fillText(
    "及改善，並透過遊戲化的樂趣增加用戶的動機與習慣建立!",
    _x,
    baseY + linStep * 5
  );
}

// 繪製主選單頁面
function drawMain() {
  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";

  mainCtx.drawImage(images["W05"], middleX - 540, 20, 60, 60); //94*94

  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillText(state.gameObjects.stars, middleX - 460, 50);

  let _y = middleY - 255;
  if (_y < 120) _y = 120;
  mainCtx.fillText("您可以選擇您要緩解的部分。", middleX, _y);
  mainCtx.fillText("完成後，您將獲得積分!", middleX, _y + 40);

  mainCtx.fillText("1", middleX - 360, middleY + 230);
  mainCtx.fillText("2", middleX, middleY + 230);
  mainCtx.fillText("3", middleX + 360, middleY + 230);

  _y = middleY + 270 + (mainCanvas.height - (middleY + 270)) / 2 - 20;
  mainCtx.fillStyle = "#D17C7C";
  mainCtx.fillText("僅為預防症狀，緩解肌肉。", middleX, _y);
  mainCtx.fillText("若已嚴重不適請就醫。", middleX, _y + 35);
}

// 繪製運動頁面
function drawExercise() {
  mainCtx.fillStyle = "#EBF5FA";
  roundRect(
    mainCtx,
    20,
    100,
    mainCanvas.width - 40,
    mainCanvas.height - 120,
    10
  );

  mainCtx.fillStyle = "#E4E8EA";
  roundRect(
    mainCtx,
    30,
    110,
    mainCanvas.width * 0.6,
    mainCanvas.height - 140,
    10
  );
}

// 繪製運動頁面介紹文字
function drawExerciseText(title, second, number, textArr, nosecound) {
  let _nosecond = nosecound || false;
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";
  mainCtx.font = "34px NotoSansTC-Light";
  mainCtx.fillStyle = "#fff";
  mainCtx.fillText(title, middleX, 55);
  mainCtx.fillStyle = "#555555";

  if (_nosecond) {
    mainCtx.fillText(number + " 次", 30 + (mainCanvas.width * 0.6) / 2, 160);
  } else {
    mainCtx.fillText(
      second + " 秒 / " + number + " 次",
      30 + (mainCanvas.width * 0.6) / 2,
      160
    );
  }

  mainCtx.font = "30px NotoSansTC-Light";
  textArr.forEach((line, i) => {
    mainCtx.fillText(
      line,
      30 + (mainCanvas.width * 0.6) / 2,
      130 + (mainCanvas.height - 140) / 2 + 42 * i
    );
  });

  mainCtx.fillStyle = "#D17C7C";
  mainCtx.font = "34px NotoSansTC-Light";
  mainCtx.fillText(
    "若感到不適，請立即停止。",
    30 + (mainCanvas.width * 0.6) / 2,
    220
  );

  mainCtx.font = "30px NotoSansTC-Light";
  mainCtx.fillText(
    "當感到舒緩或完成動作，",
    30 + (mainCanvas.width * 0.6) / 2,
    110 + mainCanvas.height - 240
  );
  mainCtx.fillText(
    "點擊螢幕中央，即可進入下一個動作。",
    30 + (mainCanvas.width * 0.6) / 2,
    110 + mainCanvas.height - 200
  );
}

// 繪製tasty介紹頁面
function drawTastyIntro() {
  mainCtx.fillStyle = "#FFF";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";

  mainCtx.font = "40px NotoSansTC-Light";
  mainCtx.fillText("介 紹", middleX, 50);

  mainCtx.textAlign = "left";
  mainCtx.textBaseline = "top";
  let baseX = middleX + (middleX - 498) / 2 + 40;
  let baseY = 210;
  let linStep = 36;

  mainCtx.font = "28px NotoSansTC-Light";
  mainCtx.fillText("配合Work?out! 肌肉舒緩。", baseX, baseY);
  mainCtx.fillText("遊戲中有8種不同的美食類型推薦，", baseX, baseY + linStep);
  mainCtx.fillText(
    "點擊新增將會消耗舒緩所累積的點數",
    baseX,
    baseY + linStep * 2
  );
  mainCtx.fillText(
    "並隨機新增推薦餐廳至玩家地圖中。",
    baseX,
    baseY + linStep * 3
  );
  mainCtx.fillText(
    "邊舒緩肌肉減緩長時間辦公的不適，",
    baseX,
    baseY + linStep * 5
  );
  mainCtx.fillText("同時組成屬於自己的美食地圖，", baseX, baseY + linStep * 6);
  mainCtx.fillText("能與好友、同事、家人 交流，", baseX, baseY + linStep * 7);
  mainCtx.fillText("再也不必煩惱下一餐吃甚麼!", baseX, baseY + linStep * 8);

  let _px = middleX - 700;
  if (_px < 0) _px = 10;
  mainCtx.font = "46px NotoSansTC-Light";
  mainCtx.textBaseline = "middle";
  mainCtx.fillText('關於 "Tasty ? out !"', _px, 150);

  let _py = 210;
  let imgW = 190;
  let imgH = 160;
  mainCtx.drawImage(images["T01"], _px, _py, 190, 160); //1251*1042
  mainCtx.drawImage(images["T02"], _px + imgW, _py, 190, 160);
  mainCtx.drawImage(images["T03"], _px + imgW * 2, _py, 190, 160);
  mainCtx.drawImage(images["T04"], _px + imgW * 3, _py, 190, 160);
  mainCtx.drawImage(images["T05"], _px, _py + imgH, 190, 160);
  mainCtx.drawImage(images["T06"], _px + imgW, _py + imgH, 190, 160);
  mainCtx.drawImage(images["T07"], _px + imgW * 2, _py + imgH, 190, 160);
  mainCtx.drawImage(images["T08"], _px + imgW * 3, _py + imgH, 190, 160);
}

// 繪製tasty主頁面
function drawTastyMain() {
  updateGameZone();
  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillStyle = "#fff";
  mainCtx.textBaseline = "middle";
  mainCtx.textAlign = "center";

  mainCtx.drawImage(images["W05"], middleX - 540, 20, 60, 60); //94*94

  mainCtx.font = "32px NotoSansTC-Light";
  mainCtx.fillText(state.gameObjects.stars, middleX - 460, 50);
}

// 顯示新增商店黃色外匡
function hightlightStore(store, x, y) {
  gameCtx.strokeStyle = "#ECD276";
  gameCtx.lineWidth = 10;
  gameCtx.beginPath();
  gameCtx.moveTo(x + 60, y);
  gameCtx.lineTo(x, y);
  gameCtx.lineTo(x, y + 50);
  gameCtx.stroke();

  gameCtx.moveTo(x + 120, y);
  gameCtx.lineTo(x + 180, y);
  gameCtx.lineTo(x + 180, y + 50);
  gameCtx.stroke();

  gameCtx.moveTo(x + 60, y + 150);
  gameCtx.lineTo(x, y + 150);
  gameCtx.lineTo(x, y + 100);
  gameCtx.stroke();

  gameCtx.moveTo(x + 180, y + 100);
  gameCtx.lineTo(x + 180, y + 150);
  gameCtx.lineTo(x + 120, y + 150);
  gameCtx.stroke();
  gameButtons.push({
    range: {
      x,
      y,
      w: 180,
      h: 150,
    },
    action: () => {
      store.state = 0;
      updateGameZone();
      updateDialog = showStoreInfoDialog;
      dialogParameters.picNum = store.store.toString().padStart(3, "0");
      updateDialog();
      showDialog();
    },
  });
}

// 更新遊戲畫面內容
function updateGameZone() {
  gameButtons = [];
  let _gameZoneX = gameZoneX;
  let _gameZoneY = gameZoneY;
  state.gameObjects.maps.forEach((row) => {
    row.forEach((obj) => {
      if (obj.store == 0) {
        gameCtx.drawImage(images["mapBg"], _gameZoneX, _gameZoneY);
      } else if (obj.store == -1) {
        gameCtx.drawImage(images["home"], _gameZoneX, _gameZoneY);
      } else if (obj.store > 0) {
        let num = obj.store.toString().padStart(3, "0");
        let name = "A" + num;
        gameCtx.drawImage(images[name], _gameZoneX, _gameZoneY);

        gameButtons.push({
          range: {
            x: _gameZoneX,
            y: _gameZoneY,
            w: 180,
            h: 150,
          },
          action: () => {
            updateDialog = showStoreInfoDialog;
            dialogParameters.picNum = num;
            updateDialog();
            showDialog();
          },
        });
      }
      _gameZoneX += 180;
    });
    _gameZoneY += 150;
    _gameZoneX = gameZoneX;
  });

  _gameZoneX = gameZoneX;
  _gameZoneY = gameZoneY;
  state.gameObjects.maps.forEach((row) => {
    row.forEach((obj) => {
      switch (obj.state) {
        case "new":
          hightlightStore(obj, _gameZoneX, _gameZoneY);
          break;
        default:
          break;
      }
      _gameZoneX += 180;
    });
    _gameZoneY += 150;
    _gameZoneX = gameZoneX;
  });

  gameCtx.fillStyle = "#B2CA9D";
  let _r = 10;
  gameCtx.beginPath();
  gameCtx.moveTo(0, _r);
  gameCtx.quadraticCurveTo(0, 0, _r, 0);
  gameCtx.lineTo(0, 0);
  gameCtx.closePath();
  gameCtx.fill();

  gameCtx.beginPath();
  gameCtx.moveTo(gameCanvas.width - _r, 0);
  gameCtx.quadraticCurveTo(gameCanvas.width, 0, gameCanvas.width, _r);
  gameCtx.lineTo(gameCanvas.width, 0);
  gameCtx.closePath();
  gameCtx.fill();

  gameCtx.beginPath();
  gameCtx.moveTo(0, gameCanvas.height - _r);
  gameCtx.quadraticCurveTo(0, gameCanvas.height, _r, gameCanvas.height);
  gameCtx.lineTo(0, gameCanvas.height);
  gameCtx.closePath();
  gameCtx.fill();

  gameCtx.beginPath();
  gameCtx.moveTo(gameCanvas.width, gameCanvas.height - _r);
  gameCtx.quadraticCurveTo(
    gameCanvas.width,
    gameCanvas.height,
    gameCanvas.width - _r,
    gameCanvas.height
  );
  gameCtx.lineTo(gameCanvas.width, gameCanvas.height);
  gameCtx.closePath();
  gameCtx.fill();
}

// 更新遊戲畫面邊界
function updateBoundary(x, y) {
  let _map = state.gameObjects.maps;

  if (x + 3 >= _map[0].length) {
    //append left
    state.gameObjects.maps.forEach((row) => {
      row.push({ store: 0, state: 0 });
    });
  }
  if (x < 3) {
    //append right
    state.gameObjects.maps.forEach((row) => {
      row.push({ store: 0, state: 0 });
      //console.log(row.length);
      for (let i = row.length - 1; i >= 1; i--) {
        row[i] = JSON.parse(JSON.stringify(row[i - 1]));
      }
    });
  }
  if (y + 3 >= _map.length) {
    //append buttom
    let _nr = [];
    for (let i = 0; i < _map[0].length; i++) {
      _nr.push({ store: 0, state: 0 });
    }
    state.gameObjects.maps.push(_nr);
  }
  if (y < 3) {
    //append up
    let _nr = [];
    for (let i = 0; i < _map[0].length; i++) {
      _nr.push({ store: 0, state: 0 });
    }
    state.gameObjects.maps.push(_nr);

    for (let j = 0; j < _map[0].length; j++) {
      for (let i = _map.length - 1; i >= 1; i--) {
        state.gameObjects.maps[i][j] = JSON.parse(
          JSON.stringify(state.gameObjects.maps[i - 1][j])
        );
      }
    }
  }
}

// 設定遊戲畫面繪製座標
function determineGameZomePosition(x, y) {
  let newX = x;
  let newY = y;
  if (newX > 0) newX = 0;
  if (newY > 0) newY = 0;
  if (newX + state.gameObjects.maps[0].length * 180 < gameCanvas.width) {
    newX = gameCanvas.width - state.gameObjects.maps[0].length * 180;
  }
  if (newY + state.gameObjects.maps.length * 150 < gameCanvas.height) {
    newY = gameCanvas.height - state.gameObjects.maps.length * 150;
  }
  gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  gameZoneX = newX;
  gameZoneY = newY;
}

// 設定滑鼠拖移事件
var isDrag = false;
gameCanvas.onmousedown = (e) => {
  // 180 * 150
  let offsetX = e.layerX - gameZoneX;
  let offsetY = e.layerY - gameZoneY;
  isDrag = true;
  gameCanvas.onmousemove = (e) => {
    if (isDrag) {
      let newX = e.layerX - offsetX;
      let newY = e.layerY - offsetY;
      determineGameZomePosition(newX, newY);
      updateGameZone();
    }
  };
};

gameCanvas.onmouseup = (e) => {
  isDrag = false;
  gameCanvas.onmousemove = null;
};
