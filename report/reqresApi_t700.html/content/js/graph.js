/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 120.0, "minX": 0.0, "maxY": 8212.0, "series": [{"data": [[0.0, 120.0], [0.1, 120.0], [0.2, 139.0], [0.3, 145.0], [0.4, 145.0], [0.5, 150.0], [0.6, 153.0], [0.7, 153.0], [0.8, 162.0], [0.9, 164.0], [1.0, 165.0], [1.1, 165.0], [1.2, 165.0], [1.3, 166.0], [1.4, 166.0], [1.5, 171.0], [1.6, 173.0], [1.7, 173.0], [1.8, 174.0], [1.9, 175.0], [2.0, 176.0], [2.1, 176.0], [2.2, 178.0], [2.3, 179.0], [2.4, 179.0], [2.5, 180.0], [2.6, 180.0], [2.7, 180.0], [2.8, 181.0], [2.9, 185.0], [3.0, 185.0], [3.1, 185.0], [3.2, 187.0], [3.3, 188.0], [3.4, 188.0], [3.5, 192.0], [3.6, 192.0], [3.7, 192.0], [3.8, 193.0], [3.9, 194.0], [4.0, 196.0], [4.1, 196.0], [4.2, 197.0], [4.3, 205.0], [4.4, 205.0], [4.5, 209.0], [4.6, 210.0], [4.7, 210.0], [4.8, 210.0], [4.9, 212.0], [5.0, 216.0], [5.1, 216.0], [5.2, 217.0], [5.3, 218.0], [5.4, 218.0], [5.5, 222.0], [5.6, 229.0], [5.7, 229.0], [5.8, 230.0], [5.9, 230.0], [6.0, 230.0], [6.1, 233.0], [6.2, 233.0], [6.3, 233.0], [6.4, 233.0], [6.5, 235.0], [6.6, 237.0], [6.7, 237.0], [6.8, 241.0], [6.9, 245.0], [7.0, 245.0], [7.1, 246.0], [7.2, 250.0], [7.3, 263.0], [7.4, 263.0], [7.5, 268.0], [7.6, 269.0], [7.7, 269.0], [7.8, 291.0], [7.9, 305.0], [8.0, 305.0], [8.1, 306.0], [8.2, 320.0], [8.3, 324.0], [8.4, 324.0], [8.5, 343.0], [8.6, 360.0], [8.7, 360.0], [8.8, 362.0], [8.9, 363.0], [9.0, 363.0], [9.1, 367.0], [9.2, 373.0], [9.3, 373.0], [9.4, 373.0], [9.5, 374.0], [9.6, 376.0], [9.7, 376.0], [9.8, 376.0], [9.9, 385.0], [10.0, 385.0], [10.1, 387.0], [10.2, 388.0], [10.3, 397.0], [10.4, 397.0], [10.5, 397.0], [10.6, 397.0], [10.7, 397.0], [10.8, 399.0], [10.9, 399.0], [11.0, 399.0], [11.1, 401.0], [11.2, 402.0], [11.3, 403.0], [11.4, 403.0], [11.5, 409.0], [11.6, 412.0], [11.7, 412.0], [11.8, 422.0], [11.9, 423.0], [12.0, 428.0], [12.1, 428.0], [12.2, 429.0], [12.3, 433.0], [12.4, 433.0], [12.5, 435.0], [12.6, 435.0], [12.7, 435.0], [12.8, 439.0], [12.9, 439.0], [13.0, 441.0], [13.1, 441.0], [13.2, 441.0], [13.3, 443.0], [13.4, 443.0], [13.5, 444.0], [13.6, 444.0], [13.7, 444.0], [13.8, 450.0], [13.9, 452.0], [14.0, 454.0], [14.1, 454.0], [14.2, 457.0], [14.3, 468.0], [14.4, 468.0], [14.5, 468.0], [14.6, 480.0], [14.7, 480.0], [14.8, 482.0], [14.9, 483.0], [15.0, 488.0], [15.1, 488.0], [15.2, 501.0], [15.3, 578.0], [15.4, 578.0], [15.5, 612.0], [15.6, 612.0], [15.7, 612.0], [15.8, 619.0], [15.9, 625.0], [16.0, 627.0], [16.1, 627.0], [16.2, 689.0], [16.3, 745.0], [16.4, 745.0], [16.5, 750.0], [16.6, 766.0], [16.7, 766.0], [16.8, 778.0], [16.9, 779.0], [17.0, 781.0], [17.1, 781.0], [17.2, 782.0], [17.3, 785.0], [17.4, 785.0], [17.5, 786.0], [17.6, 788.0], [17.7, 788.0], [17.8, 789.0], [17.9, 791.0], [18.0, 799.0], [18.1, 799.0], [18.2, 892.0], [18.3, 958.0], [18.4, 958.0], [18.5, 973.0], [18.6, 981.0], [18.7, 981.0], [18.8, 983.0], [18.9, 996.0], [19.0, 1000.0], [19.1, 1000.0], [19.2, 1004.0], [19.3, 1061.0], [19.4, 1061.0], [19.5, 1068.0], [19.6, 1070.0], [19.7, 1070.0], [19.8, 1075.0], [19.9, 1075.0], [20.0, 1075.0], [20.1, 1075.0], [20.2, 1082.0], [20.3, 1084.0], [20.4, 1084.0], [20.5, 1085.0], [20.6, 1096.0], [20.7, 1096.0], [20.8, 1114.0], [20.9, 1133.0], [21.0, 1156.0], [21.1, 1156.0], [21.2, 1220.0], [21.3, 1284.0], [21.4, 1284.0], [21.5, 1286.0], [21.6, 1289.0], [21.7, 1289.0], [21.8, 1332.0], [21.9, 1340.0], [22.0, 1341.0], [22.1, 1341.0], [22.2, 1347.0], [22.3, 1351.0], [22.4, 1351.0], [22.5, 1353.0], [22.6, 1366.0], [22.7, 1366.0], [22.8, 1372.0], [22.9, 1381.0], [23.0, 1384.0], [23.1, 1384.0], [23.2, 1392.0], [23.3, 1394.0], [23.4, 1394.0], [23.5, 1395.0], [23.6, 1399.0], [23.7, 1399.0], [23.8, 1401.0], [23.9, 1403.0], [24.0, 1404.0], [24.1, 1404.0], [24.2, 1406.0], [24.3, 1408.0], [24.4, 1408.0], [24.5, 1411.0], [24.6, 1418.0], [24.7, 1418.0], [24.8, 1425.0], [24.9, 1429.0], [25.0, 1431.0], [25.1, 1431.0], [25.2, 1436.0], [25.3, 1438.0], [25.4, 1438.0], [25.5, 1443.0], [25.6, 1446.0], [25.7, 1446.0], [25.8, 1447.0], [25.9, 1449.0], [26.0, 1450.0], [26.1, 1450.0], [26.2, 1451.0], [26.3, 1452.0], [26.4, 1452.0], [26.5, 1453.0], [26.6, 1458.0], [26.7, 1458.0], [26.8, 1463.0], [26.9, 1466.0], [27.0, 1468.0], [27.1, 1468.0], [27.2, 1470.0], [27.3, 1474.0], [27.4, 1474.0], [27.5, 1477.0], [27.6, 1480.0], [27.7, 1480.0], [27.8, 1481.0], [27.9, 1482.0], [28.0, 1482.0], [28.1, 1482.0], [28.2, 1483.0], [28.3, 1487.0], [28.4, 1487.0], [28.5, 1487.0], [28.6, 1488.0], [28.7, 1488.0], [28.8, 1498.0], [28.9, 1500.0], [29.0, 1501.0], [29.1, 1501.0], [29.2, 1509.0], [29.3, 1514.0], [29.4, 1514.0], [29.5, 1516.0], [29.6, 1516.0], [29.7, 1516.0], [29.8, 1517.0], [29.9, 1521.0], [30.0, 1521.0], [30.1, 1521.0], [30.2, 1526.0], [30.3, 1527.0], [30.4, 1527.0], [30.5, 1527.0], [30.6, 1528.0], [30.7, 1528.0], [30.8, 1529.0], [30.9, 1531.0], [31.0, 1531.0], [31.1, 1531.0], [31.2, 1533.0], [31.3, 1534.0], [31.4, 1534.0], [31.5, 1540.0], [31.6, 1540.0], [31.7, 1540.0], [31.8, 1541.0], [31.9, 1541.0], [32.0, 1541.0], [32.1, 1541.0], [32.2, 1542.0], [32.3, 1543.0], [32.4, 1543.0], [32.5, 1543.0], [32.6, 1544.0], [32.7, 1544.0], [32.8, 1546.0], [32.9, 1547.0], [33.0, 1547.0], [33.1, 1547.0], [33.2, 1549.0], [33.3, 1552.0], [33.4, 1552.0], [33.5, 1583.0], [33.6, 1584.0], [33.7, 1584.0], [33.8, 1593.0], [33.9, 1594.0], [34.0, 1602.0], [34.1, 1602.0], [34.2, 1621.0], [34.3, 1625.0], [34.4, 1625.0], [34.5, 1625.0], [34.6, 1627.0], [34.7, 1627.0], [34.8, 1638.0], [34.9, 1642.0], [35.0, 1644.0], [35.1, 1644.0], [35.2, 1645.0], [35.3, 1645.0], [35.4, 1645.0], [35.5, 1652.0], [35.6, 1660.0], [35.7, 1660.0], [35.8, 1663.0], [35.9, 1665.0], [36.0, 1669.0], [36.1, 1669.0], [36.2, 1672.0], [36.3, 1678.0], [36.4, 1678.0], [36.5, 1679.0], [36.6, 1679.0], [36.7, 1679.0], [36.8, 1681.0], [36.9, 1682.0], [37.0, 1682.0], [37.1, 1683.0], [37.2, 1684.0], [37.3, 1685.0], [37.4, 1685.0], [37.5, 1685.0], [37.6, 1688.0], [37.7, 1688.0], [37.8, 1689.0], [37.9, 1691.0], [38.0, 1691.0], [38.1, 1691.0], [38.2, 1691.0], [38.3, 1693.0], [38.4, 1693.0], [38.5, 1693.0], [38.6, 1693.0], [38.7, 1693.0], [38.8, 1693.0], [38.9, 1697.0], [39.0, 1697.0], [39.1, 1715.0], [39.2, 1721.0], [39.3, 1725.0], [39.4, 1725.0], [39.5, 1726.0], [39.6, 1728.0], [39.7, 1728.0], [39.8, 1728.0], [39.9, 1730.0], [40.0, 1730.0], [40.1, 1738.0], [40.2, 1739.0], [40.3, 1742.0], [40.4, 1742.0], [40.5, 1742.0], [40.6, 1742.0], [40.7, 1742.0], [40.8, 1744.0], [40.9, 1748.0], [41.0, 1748.0], [41.1, 1760.0], [41.2, 1760.0], [41.3, 1767.0], [41.4, 1767.0], [41.5, 1769.0], [41.6, 1771.0], [41.7, 1771.0], [41.8, 1773.0], [41.9, 1775.0], [42.0, 1775.0], [42.1, 1777.0], [42.2, 1788.0], [42.3, 1805.0], [42.4, 1805.0], [42.5, 1810.0], [42.6, 1815.0], [42.7, 1815.0], [42.8, 1815.0], [42.9, 1822.0], [43.0, 1822.0], [43.1, 1823.0], [43.2, 1829.0], [43.3, 1829.0], [43.4, 1829.0], [43.5, 1831.0], [43.6, 1831.0], [43.7, 1831.0], [43.8, 1832.0], [43.9, 1837.0], [44.0, 1837.0], [44.1, 1838.0], [44.2, 1840.0], [44.3, 1878.0], [44.4, 1878.0], [44.5, 1886.0], [44.6, 1913.0], [44.7, 1913.0], [44.8, 1944.0], [44.9, 1944.0], [45.0, 1944.0], [45.1, 1968.0], [45.2, 1971.0], [45.3, 2009.0], [45.4, 2009.0], [45.5, 2024.0], [45.6, 2172.0], [45.7, 2172.0], [45.8, 2189.0], [45.9, 2221.0], [46.0, 2221.0], [46.1, 2237.0], [46.2, 2284.0], [46.3, 2341.0], [46.4, 2341.0], [46.5, 2344.0], [46.6, 2355.0], [46.7, 2355.0], [46.8, 2469.0], [46.9, 2508.0], [47.0, 2508.0], [47.1, 2516.0], [47.2, 2530.0], [47.3, 2585.0], [47.4, 2585.0], [47.5, 2665.0], [47.6, 2698.0], [47.7, 2698.0], [47.8, 2698.0], [47.9, 2712.0], [48.0, 2712.0], [48.1, 2715.0], [48.2, 2828.0], [48.3, 2850.0], [48.4, 2850.0], [48.5, 2922.0], [48.6, 2971.0], [48.7, 2971.0], [48.8, 2981.0], [48.9, 3017.0], [49.0, 3017.0], [49.1, 3019.0], [49.2, 3026.0], [49.3, 3056.0], [49.4, 3056.0], [49.5, 3058.0], [49.6, 3064.0], [49.7, 3064.0], [49.8, 3085.0], [49.9, 3089.0], [50.0, 3089.0], [50.1, 3122.0], [50.2, 3161.0], [50.3, 3182.0], [50.4, 3182.0], [50.5, 3187.0], [50.6, 3189.0], [50.7, 3189.0], [50.8, 3200.0], [50.9, 3206.0], [51.0, 3206.0], [51.1, 3221.0], [51.2, 3223.0], [51.3, 3230.0], [51.4, 3230.0], [51.5, 3243.0], [51.6, 3245.0], [51.7, 3245.0], [51.8, 3247.0], [51.9, 3250.0], [52.0, 3250.0], [52.1, 3267.0], [52.2, 3294.0], [52.3, 3317.0], [52.4, 3317.0], [52.5, 3321.0], [52.6, 3329.0], [52.7, 3329.0], [52.8, 3332.0], [52.9, 3340.0], [53.0, 3340.0], [53.1, 3345.0], [53.2, 3346.0], [53.3, 3355.0], [53.4, 3355.0], [53.5, 3403.0], [53.6, 3416.0], [53.7, 3416.0], [53.8, 3422.0], [53.9, 3422.0], [54.0, 3422.0], [54.1, 3424.0], [54.2, 3434.0], [54.3, 3436.0], [54.4, 3436.0], [54.5, 3439.0], [54.6, 3475.0], [54.7, 3475.0], [54.8, 3488.0], [54.9, 3491.0], [55.0, 3491.0], [55.1, 3502.0], [55.2, 3540.0], [55.3, 3548.0], [55.4, 3548.0], [55.5, 3555.0], [55.6, 3561.0], [55.7, 3561.0], [55.8, 3585.0], [55.9, 3588.0], [56.0, 3588.0], [56.1, 3590.0], [56.2, 3610.0], [56.3, 3616.0], [56.4, 3616.0], [56.5, 3634.0], [56.6, 3646.0], [56.7, 3646.0], [56.8, 3653.0], [56.9, 3668.0], [57.0, 3668.0], [57.1, 3683.0], [57.2, 3687.0], [57.3, 3689.0], [57.4, 3689.0], [57.5, 3691.0], [57.6, 3695.0], [57.7, 3695.0], [57.8, 3712.0], [57.9, 3714.0], [58.0, 3714.0], [58.1, 3718.0], [58.2, 3726.0], [58.3, 3756.0], [58.4, 3756.0], [58.5, 3768.0], [58.6, 3769.0], [58.7, 3769.0], [58.8, 3774.0], [58.9, 3784.0], [59.0, 3784.0], [59.1, 3784.0], [59.2, 3789.0], [59.3, 3795.0], [59.4, 3795.0], [59.5, 3797.0], [59.6, 3800.0], [59.7, 3800.0], [59.8, 3821.0], [59.9, 3827.0], [60.0, 3827.0], [60.1, 3842.0], [60.2, 3849.0], [60.3, 3850.0], [60.4, 3850.0], [60.5, 3860.0], [60.6, 3888.0], [60.7, 3888.0], [60.8, 3904.0], [60.9, 3905.0], [61.0, 3905.0], [61.1, 3907.0], [61.2, 3921.0], [61.3, 3923.0], [61.4, 3923.0], [61.5, 3924.0], [61.6, 3937.0], [61.7, 3937.0], [61.8, 3965.0], [61.9, 3970.0], [62.0, 3970.0], [62.1, 3974.0], [62.2, 3990.0], [62.3, 3993.0], [62.4, 3993.0], [62.5, 3994.0], [62.6, 4006.0], [62.7, 4006.0], [62.8, 4011.0], [62.9, 4012.0], [63.0, 4012.0], [63.1, 4016.0], [63.2, 4017.0], [63.3, 4023.0], [63.4, 4023.0], [63.5, 4044.0], [63.6, 4046.0], [63.7, 4046.0], [63.8, 4048.0], [63.9, 4048.0], [64.0, 4048.0], [64.1, 4054.0], [64.2, 4061.0], [64.3, 4062.0], [64.4, 4062.0], [64.5, 4067.0], [64.6, 4093.0], [64.7, 4093.0], [64.8, 4097.0], [64.9, 4104.0], [65.0, 4104.0], [65.1, 4118.0], [65.2, 4128.0], [65.3, 4133.0], [65.4, 4133.0], [65.5, 4137.0], [65.6, 4138.0], [65.7, 4138.0], [65.8, 4170.0], [65.9, 4171.0], [66.0, 4171.0], [66.1, 4175.0], [66.2, 4190.0], [66.3, 4203.0], [66.4, 4203.0], [66.5, 4212.0], [66.6, 4217.0], [66.7, 4217.0], [66.8, 4235.0], [66.9, 4243.0], [67.0, 4243.0], [67.1, 4243.0], [67.2, 4247.0], [67.3, 4250.0], [67.4, 4250.0], [67.5, 4268.0], [67.6, 4281.0], [67.7, 4281.0], [67.8, 4284.0], [67.9, 4295.0], [68.0, 4295.0], [68.1, 4324.0], [68.2, 4347.0], [68.3, 4348.0], [68.4, 4348.0], [68.5, 4354.0], [68.6, 4364.0], [68.7, 4364.0], [68.8, 4395.0], [68.9, 4406.0], [69.0, 4406.0], [69.1, 4419.0], [69.2, 4432.0], [69.3, 4446.0], [69.4, 4446.0], [69.5, 4447.0], [69.6, 4479.0], [69.7, 4479.0], [69.8, 4481.0], [69.9, 4485.0], [70.0, 4485.0], [70.1, 4485.0], [70.2, 4486.0], [70.3, 4486.0], [70.4, 4486.0], [70.5, 4487.0], [70.6, 4494.0], [70.7, 4494.0], [70.8, 4494.0], [70.9, 4498.0], [71.0, 4498.0], [71.1, 4508.0], [71.2, 4514.0], [71.3, 4543.0], [71.4, 4543.0], [71.5, 4548.0], [71.6, 4550.0], [71.7, 4550.0], [71.8, 4563.0], [71.9, 4569.0], [72.0, 4569.0], [72.1, 4579.0], [72.2, 4587.0], [72.3, 4601.0], [72.4, 4601.0], [72.5, 4604.0], [72.6, 4619.0], [72.7, 4619.0], [72.8, 4681.0], [72.9, 4687.0], [73.0, 4687.0], [73.1, 4694.0], [73.2, 4694.0], [73.3, 4697.0], [73.4, 4697.0], [73.5, 4701.0], [73.6, 4740.0], [73.7, 4740.0], [73.8, 4792.0], [73.9, 4840.0], [74.0, 4840.0], [74.1, 4883.0], [74.2, 4890.0], [74.3, 4907.0], [74.4, 4907.0], [74.5, 4990.0], [74.6, 5048.0], [74.7, 5048.0], [74.8, 5068.0], [74.9, 5081.0], [75.0, 5081.0], [75.1, 5214.0], [75.2, 5224.0], [75.3, 5228.0], [75.4, 5228.0], [75.5, 5250.0], [75.6, 5252.0], [75.7, 5252.0], [75.8, 5296.0], [75.9, 5312.0], [76.0, 5312.0], [76.1, 5318.0], [76.2, 5329.0], [76.3, 5346.0], [76.4, 5346.0], [76.5, 5354.0], [76.6, 5357.0], [76.7, 5357.0], [76.8, 5360.0], [76.9, 5386.0], [77.0, 5386.0], [77.1, 5393.0], [77.2, 5403.0], [77.3, 5414.0], [77.4, 5414.0], [77.5, 5423.0], [77.6, 5543.0], [77.7, 5543.0], [77.8, 5554.0], [77.9, 5590.0], [78.0, 5590.0], [78.1, 5601.0], [78.2, 5629.0], [78.3, 5634.0], [78.4, 5634.0], [78.5, 5650.0], [78.6, 5660.0], [78.7, 5660.0], [78.8, 5669.0], [78.9, 5696.0], [79.0, 5696.0], [79.1, 5701.0], [79.2, 5727.0], [79.3, 5731.0], [79.4, 5731.0], [79.5, 5732.0], [79.6, 5769.0], [79.7, 5769.0], [79.8, 5791.0], [79.9, 5792.0], [80.0, 5792.0], [80.1, 5792.0], [80.2, 5796.0], [80.3, 5800.0], [80.4, 5800.0], [80.5, 5802.0], [80.6, 5807.0], [80.7, 5807.0], [80.8, 5811.0], [80.9, 5823.0], [81.0, 5823.0], [81.1, 5828.0], [81.2, 5834.0], [81.3, 5838.0], [81.4, 5838.0], [81.5, 5869.0], [81.6, 5904.0], [81.7, 5904.0], [81.8, 5939.0], [81.9, 5974.0], [82.0, 5974.0], [82.1, 5984.0], [82.2, 6010.0], [82.3, 6054.0], [82.4, 6054.0], [82.5, 6088.0], [82.6, 6092.0], [82.7, 6092.0], [82.8, 6101.0], [82.9, 6107.0], [83.0, 6107.0], [83.1, 6209.0], [83.2, 6228.0], [83.3, 6238.0], [83.4, 6238.0], [83.5, 6251.0], [83.6, 6252.0], [83.7, 6252.0], [83.8, 6265.0], [83.9, 6266.0], [84.0, 6269.0], [84.1, 6269.0], [84.2, 6285.0], [84.3, 6288.0], [84.4, 6288.0], [84.5, 6291.0], [84.6, 6292.0], [84.7, 6292.0], [84.8, 6332.0], [84.9, 6372.0], [85.0, 6399.0], [85.1, 6399.0], [85.2, 6401.0], [85.3, 6404.0], [85.4, 6404.0], [85.5, 6404.0], [85.6, 6405.0], [85.7, 6405.0], [85.8, 6411.0], [85.9, 6440.0], [86.0, 6447.0], [86.1, 6447.0], [86.2, 6465.0], [86.3, 6470.0], [86.4, 6470.0], [86.5, 6472.0], [86.6, 6497.0], [86.7, 6497.0], [86.8, 6520.0], [86.9, 6550.0], [87.0, 6563.0], [87.1, 6563.0], [87.2, 6568.0], [87.3, 6570.0], [87.4, 6570.0], [87.5, 6581.0], [87.6, 6654.0], [87.7, 6654.0], [87.8, 6658.0], [87.9, 6659.0], [88.0, 6663.0], [88.1, 6663.0], [88.2, 6666.0], [88.3, 6671.0], [88.4, 6671.0], [88.5, 6676.0], [88.6, 6682.0], [88.7, 6682.0], [88.8, 6706.0], [88.9, 6710.0], [89.0, 6831.0], [89.1, 6831.0], [89.2, 6840.0], [89.3, 6850.0], [89.4, 6850.0], [89.5, 6856.0], [89.6, 6873.0], [89.7, 6873.0], [89.8, 6886.0], [89.9, 6886.0], [90.0, 6889.0], [90.1, 6889.0], [90.2, 6908.0], [90.3, 6919.0], [90.4, 6919.0], [90.5, 6922.0], [90.6, 6936.0], [90.7, 6936.0], [90.8, 6941.0], [90.9, 6942.0], [91.0, 6946.0], [91.1, 6946.0], [91.2, 6949.0], [91.3, 6969.0], [91.4, 6969.0], [91.5, 6992.0], [91.6, 6994.0], [91.7, 6994.0], [91.8, 7010.0], [91.9, 7012.0], [92.0, 7047.0], [92.1, 7047.0], [92.2, 7082.0], [92.3, 7090.0], [92.4, 7090.0], [92.5, 7090.0], [92.6, 7093.0], [92.7, 7093.0], [92.8, 7103.0], [92.9, 7120.0], [93.0, 7136.0], [93.1, 7136.0], [93.2, 7141.0], [93.3, 7142.0], [93.4, 7142.0], [93.5, 7161.0], [93.6, 7203.0], [93.7, 7203.0], [93.8, 7218.0], [93.9, 7251.0], [94.0, 7284.0], [94.1, 7284.0], [94.2, 7293.0], [94.3, 7316.0], [94.4, 7316.0], [94.5, 7320.0], [94.6, 7321.0], [94.7, 7321.0], [94.8, 7340.0], [94.9, 7340.0], [95.0, 7346.0], [95.1, 7346.0], [95.2, 7346.0], [95.3, 7347.0], [95.4, 7347.0], [95.5, 7360.0], [95.6, 7370.0], [95.7, 7370.0], [95.8, 7370.0], [95.9, 7373.0], [96.0, 7373.0], [96.1, 7373.0], [96.2, 7374.0], [96.3, 7375.0], [96.4, 7375.0], [96.5, 7378.0], [96.6, 7381.0], [96.7, 7381.0], [96.8, 7396.0], [96.9, 7500.0], [97.0, 7505.0], [97.1, 7505.0], [97.2, 7560.0], [97.3, 7572.0], [97.4, 7572.0], [97.5, 7573.0], [97.6, 7581.0], [97.7, 7581.0], [97.8, 7587.0], [97.9, 7613.0], [98.0, 7654.0], [98.1, 7654.0], [98.2, 7693.0], [98.3, 7704.0], [98.4, 7704.0], [98.5, 7724.0], [98.6, 7746.0], [98.7, 7746.0], [98.8, 7779.0], [98.9, 7822.0], [99.0, 7829.0], [99.1, 7829.0], [99.2, 7853.0], [99.3, 7901.0], [99.4, 7901.0], [99.5, 7901.0], [99.6, 7979.0], [99.7, 7979.0], [99.8, 8123.0], [99.9, 8212.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 36.0, "series": [{"data": [[600.0, 6.0], [700.0, 13.0], [800.0, 1.0], [900.0, 5.0], [1000.0, 12.0], [1100.0, 3.0], [1200.0, 4.0], [1300.0, 14.0], [1400.0, 36.0], [1500.0, 36.0], [1600.0, 35.0], [1700.0, 23.0], [1800.0, 16.0], [1900.0, 5.0], [2000.0, 2.0], [2100.0, 2.0], [2200.0, 3.0], [2300.0, 3.0], [2400.0, 1.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 2.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 8.0], [3100.0, 5.0], [3200.0, 11.0], [3300.0, 8.0], [3400.0, 11.0], [3500.0, 8.0], [3700.0, 13.0], [3600.0, 11.0], [3800.0, 8.0], [3900.0, 13.0], [4000.0, 16.0], [4200.0, 12.0], [4100.0, 10.0], [4300.0, 6.0], [4500.0, 9.0], [4400.0, 15.0], [4600.0, 8.0], [4700.0, 3.0], [4800.0, 3.0], [4900.0, 2.0], [5000.0, 3.0], [5200.0, 6.0], [5300.0, 9.0], [5400.0, 3.0], [5600.0, 7.0], [5500.0, 3.0], [5800.0, 9.0], [5700.0, 9.0], [6000.0, 4.0], [5900.0, 4.0], [6100.0, 2.0], [6200.0, 12.0], [6300.0, 3.0], [6400.0, 11.0], [6600.0, 8.0], [6500.0, 6.0], [6800.0, 8.0], [6900.0, 11.0], [6700.0, 2.0], [7000.0, 7.0], [7100.0, 6.0], [7300.0, 18.0], [7200.0, 5.0], [7500.0, 7.0], [7600.0, 3.0], [7700.0, 4.0], [7800.0, 3.0], [7900.0, 3.0], [8100.0, 1.0], [8200.0, 1.0], [100.0, 30.0], [200.0, 25.0], [300.0, 22.0], [400.0, 29.0], [500.0, 2.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 97.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 497.0, "series": [{"data": [[0.0, 106.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 97.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 497.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 273.1157142857139, "minX": 1.7288016E12, "maxY": 273.1157142857139, "series": [{"data": [[1.7288016E12, 273.1157142857139]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7288016E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 153.0, "minX": 1.0, "maxY": 7829.0, "series": [{"data": [[2.0, 196.0], [4.0, 162.5], [6.0, 180.5], [7.0, 187.0], [8.0, 263.0], [9.0, 178.0], [10.0, 179.0], [11.0, 170.66666666666666], [12.0, 172.5], [13.0, 195.0], [14.0, 165.25], [15.0, 216.5], [16.0, 228.33333333333334], [17.0, 219.0], [19.0, 247.0], [20.0, 255.33333333333334], [21.0, 209.33333333333334], [22.0, 330.0], [24.0, 238.33333333333334], [26.0, 241.0], [27.0, 421.0], [29.0, 388.6666666666667], [31.0, 414.3333333333333], [33.0, 468.0], [35.0, 439.0], [34.0, 382.0], [37.0, 370.25], [36.0, 390.4], [39.0, 355.5], [41.0, 382.0], [40.0, 416.3333333333333], [43.0, 444.0], [42.0, 394.5], [47.0, 1002.0], [49.0, 739.5], [51.0, 444.0], [50.0, 1453.0], [53.0, 973.0], [54.0, 437.0], [57.0, 983.0], [56.0, 453.5], [59.0, 439.0], [58.0, 981.0], [60.0, 939.5], [63.0, 923.5], [62.0, 1086.0], [67.0, 1584.0], [66.0, 1425.0], [65.0, 975.75], [64.0, 2344.0], [71.0, 1886.0], [70.0, 905.8], [69.0, 1155.0], [68.0, 399.0], [72.0, 1805.0], [81.0, 1527.0], [90.0, 1493.0], [94.0, 1602.0], [93.0, 1450.0], [92.0, 1410.5], [99.0, 612.0], [98.0, 1660.0], [97.0, 1340.0], [96.0, 1443.5], [103.0, 766.0], [102.0, 1341.0], [101.0, 1347.0], [100.0, 989.0], [107.0, 1408.0], [106.0, 810.5], [105.0, 568.6666666666666], [111.0, 1546.0], [110.0, 1547.0], [109.0, 1529.0], [113.0, 1535.25], [119.0, 1527.0], [117.0, 1535.0], [116.0, 1538.0], [123.0, 1070.0], [122.0, 1554.5], [121.0, 1070.3333333333333], [120.0, 1547.3333333333333], [127.0, 1715.8], [125.0, 1279.0], [124.0, 1426.2], [126.0, 1509.0], [134.0, 1077.142857142857], [132.0, 1167.0], [131.0, 1381.0], [130.0, 1395.0], [129.0, 1372.6666666666667], [128.0, 1404.0], [142.0, 1503.6666666666667], [140.0, 1548.5], [137.0, 1110.3999999999999], [138.0, 787.0], [151.0, 1544.0], [149.0, 1769.0], [148.0, 1549.0], [147.0, 1693.0], [146.0, 1728.0], [145.0, 1480.0], [144.0, 1728.0], [159.0, 1688.0], [158.0, 1540.0], [157.0, 1541.0], [156.0, 1882.0], [154.0, 1618.5], [152.0, 1562.0], [167.0, 1693.0], [166.0, 1679.75], [164.0, 1669.0], [163.0, 1688.5], [161.0, 1691.0], [160.0, 1678.0], [175.0, 1551.0], [174.0, 1682.0], [173.0, 1685.0], [172.0, 1663.0], [170.0, 1691.0], [169.0, 1679.0], [183.0, 1878.0], [182.0, 2189.0], [181.0, 1332.0], [180.0, 1618.0], [179.0, 1771.0], [178.0, 1403.0], [176.0, 2005.0], [191.0, 3502.0], [190.0, 1841.0], [188.0, 1745.0], [187.0, 1728.0], [186.0, 1739.0], [185.0, 1725.0], [184.0, 1507.6], [199.0, 2717.0], [196.0, 1944.0], [195.0, 1638.0], [194.0, 1644.5], [192.0, 3488.0], [207.0, 1775.0], [206.0, 1825.5], [205.0, 1823.0], [203.0, 1813.3333333333333], [201.0, 3957.333333333333], [200.0, 1840.0], [215.0, 6576.0], [214.0, 7332.0], [213.0, 3208.5], [212.0, 3607.0], [211.0, 4024.4], [208.0, 4945.0], [209.0, 2355.0], [222.0, 4097.0], [218.0, 3970.0], [217.0, 5052.333333333333], [231.0, 4250.0], [230.0, 4103.5], [229.0, 5208.0], [228.0, 4011.0], [226.0, 4055.0], [225.0, 4133.0], [224.0, 4002.5], [239.0, 3649.5], [238.0, 4268.0], [237.0, 4569.0], [236.0, 4423.0], [235.0, 4041.5], [233.0, 3630.5], [247.0, 3317.0], [245.0, 3346.0], [244.0, 4694.0], [243.0, 4531.5], [242.0, 3355.0], [241.0, 3325.0], [255.0, 3351.0], [253.0, 3561.0], [252.0, 3278.3333333333335], [250.0, 3284.0], [249.0, 3422.0], [248.0, 7628.0], [270.0, 3950.5], [271.0, 4347.0], [268.0, 4398.333333333333], [259.0, 3613.0], [257.0, 3354.0], [265.0, 7516.0], [263.0, 5539.8], [262.0, 7829.0], [261.0, 5117.0], [264.0, 7090.0], [267.0, 4069.0], [286.0, 4446.0], [287.0, 3842.0], [285.0, 7693.0], [284.0, 4740.0], [283.0, 4137.0], [282.0, 3828.5], [280.0, 5983.5], [279.0, 4016.0], [273.0, 5834.0], [277.0, 3433.0], [302.0, 2700.5], [303.0, 3689.0], [300.0, 2920.0], [299.0, 5823.0], [297.0, 5590.0], [296.0, 3714.0], [295.0, 4564.333333333333], [292.0, 3200.0], [291.0, 5120.333333333333], [289.0, 5732.0], [319.0, 4990.0], [317.0, 7746.0], [316.0, 6435.5], [315.0, 7115.5], [314.0, 5699.0], [313.0, 1679.0], [311.0, 5475.666666666667], [308.0, 2860.6666666666665], [333.0, 5068.0], [335.0, 7587.0], [332.0, 5701.0], [331.0, 4333.666666666667], [329.0, 1715.0], [328.0, 7604.5], [326.0, 3272.6666666666665], [325.0, 1742.0], [323.0, 7724.0], [322.0, 7488.5], [320.0, 5384.0], [349.0, 7613.0], [348.0, 3718.0], [346.0, 5680.5], [344.0, 5601.0], [343.0, 6071.0], [341.0, 1815.0], [340.0, 1815.0], [338.0, 5015.5], [336.0, 4631.5], [358.0, 5590.5], [357.0, 7223.0], [354.0, 3782.0], [352.0, 6120.75], [455.0, 7141.0], [534.0, 5224.674876847286], [543.0, 4023.0], [544.0, 4681.0], [1.0, 153.0]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[273.1157142857139, 3248.689999999993]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 544.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1435.0, "minX": 1.7288016E12, "maxY": 22598.333333333332, "series": [{"data": [[1.7288016E12, 22598.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7288016E12, 1435.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7288016E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3248.689999999993, "minX": 1.7288016E12, "maxY": 3248.689999999993, "series": [{"data": [[1.7288016E12, 3248.689999999993]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7288016E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 3192.134285714284, "minX": 1.7288016E12, "maxY": 3192.134285714284, "series": [{"data": [[1.7288016E12, 3192.134285714284]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7288016E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2526.6228571428614, "minX": 1.7288016E12, "maxY": 2526.6228571428614, "series": [{"data": [[1.7288016E12, 2526.6228571428614]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7288016E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 120.0, "minX": 1.7288016E12, "maxY": 8212.0, "series": [{"data": [[1.7288016E12, 8212.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7288016E12, 120.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7288016E12, 6888.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7288016E12, 7828.93]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7288016E12, 3105.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7288016E12, 7345.7]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7288016E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 153.0, "minX": 1.0, "maxY": 5251.0, "series": [{"data": [[128.0, 373.0], [1.0, 153.0], [316.0, 5251.0], [255.0, 1669.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 316.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 153.0, "minX": 1.0, "maxY": 5174.5, "series": [{"data": [[128.0, 373.0], [1.0, 153.0], [316.0, 5174.5], [255.0, 1669.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 316.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.35, "minX": 1.72880154E12, "maxY": 6.316666666666666, "series": [{"data": [[1.7288016E12, 5.35], [1.72880154E12, 6.316666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7288016E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 11.666666666666666, "minX": 1.7288016E12, "maxY": 11.666666666666666, "series": [{"data": [[1.7288016E12, 11.666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7288016E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 11.666666666666666, "minX": 1.7288016E12, "maxY": 11.666666666666666, "series": [{"data": [[1.7288016E12, 11.666666666666666]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7288016E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 11.666666666666666, "minX": 1.7288016E12, "maxY": 11.666666666666666, "series": [{"data": [[1.7288016E12, 11.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7288016E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

