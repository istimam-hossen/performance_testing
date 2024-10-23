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
        data: {"result": {"minY": 125.0, "minX": 0.0, "maxY": 6152.0, "series": [{"data": [[0.0, 125.0], [0.1, 125.0], [0.2, 125.0], [0.3, 125.0], [0.4, 125.0], [0.5, 127.0], [0.6, 127.0], [0.7, 127.0], [0.8, 128.0], [0.9, 128.0], [1.0, 131.0], [1.1, 131.0], [1.2, 131.0], [1.3, 131.0], [1.4, 131.0], [1.5, 132.0], [1.6, 132.0], [1.7, 132.0], [1.8, 132.0], [1.9, 132.0], [2.0, 133.0], [2.1, 133.0], [2.2, 133.0], [2.3, 133.0], [2.4, 133.0], [2.5, 133.0], [2.6, 133.0], [2.7, 133.0], [2.8, 133.0], [2.9, 133.0], [3.0, 136.0], [3.1, 136.0], [3.2, 136.0], [3.3, 136.0], [3.4, 136.0], [3.5, 136.0], [3.6, 136.0], [3.7, 136.0], [3.8, 136.0], [3.9, 136.0], [4.0, 137.0], [4.1, 137.0], [4.2, 137.0], [4.3, 137.0], [4.4, 137.0], [4.5, 138.0], [4.6, 138.0], [4.7, 138.0], [4.8, 138.0], [4.9, 138.0], [5.0, 139.0], [5.1, 139.0], [5.2, 139.0], [5.3, 139.0], [5.4, 139.0], [5.5, 140.0], [5.6, 140.0], [5.7, 140.0], [5.8, 140.0], [5.9, 140.0], [6.0, 140.0], [6.1, 140.0], [6.2, 140.0], [6.3, 141.0], [6.4, 141.0], [6.5, 142.0], [6.6, 142.0], [6.7, 142.0], [6.8, 143.0], [6.9, 143.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 143.0], [7.6, 143.0], [7.7, 143.0], [7.8, 143.0], [7.9, 143.0], [8.0, 143.0], [8.1, 143.0], [8.2, 143.0], [8.3, 144.0], [8.4, 144.0], [8.5, 144.0], [8.6, 144.0], [8.7, 144.0], [8.8, 144.0], [8.9, 144.0], [9.0, 144.0], [9.1, 144.0], [9.2, 144.0], [9.3, 145.0], [9.4, 145.0], [9.5, 145.0], [9.6, 145.0], [9.7, 145.0], [9.8, 146.0], [9.9, 146.0], [10.0, 146.0], [10.1, 146.0], [10.2, 146.0], [10.3, 147.0], [10.4, 147.0], [10.5, 147.0], [10.6, 147.0], [10.7, 147.0], [10.8, 148.0], [10.9, 148.0], [11.0, 148.0], [11.1, 148.0], [11.2, 148.0], [11.3, 148.0], [11.4, 148.0], [11.5, 148.0], [11.6, 148.0], [11.7, 148.0], [11.8, 148.0], [11.9, 148.0], [12.0, 149.0], [12.1, 149.0], [12.2, 149.0], [12.3, 149.0], [12.4, 149.0], [12.5, 149.0], [12.6, 149.0], [12.7, 149.0], [12.8, 149.0], [12.9, 149.0], [13.0, 150.0], [13.1, 150.0], [13.2, 150.0], [13.3, 150.0], [13.4, 150.0], [13.5, 151.0], [13.6, 151.0], [13.7, 151.0], [13.8, 151.0], [13.9, 151.0], [14.0, 151.0], [14.1, 151.0], [14.2, 151.0], [14.3, 152.0], [14.4, 152.0], [14.5, 152.0], [14.6, 152.0], [14.7, 152.0], [14.8, 152.0], [14.9, 152.0], [15.0, 152.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 152.0], [15.8, 153.0], [15.9, 153.0], [16.0, 153.0], [16.1, 153.0], [16.2, 153.0], [16.3, 154.0], [16.4, 154.0], [16.5, 154.0], [16.6, 154.0], [16.7, 154.0], [16.8, 155.0], [16.9, 155.0], [17.0, 156.0], [17.1, 156.0], [17.2, 156.0], [17.3, 156.0], [17.4, 156.0], [17.5, 157.0], [17.6, 157.0], [17.7, 157.0], [17.8, 157.0], [17.9, 157.0], [18.0, 157.0], [18.1, 157.0], [18.2, 157.0], [18.3, 158.0], [18.4, 158.0], [18.5, 158.0], [18.6, 158.0], [18.7, 158.0], [18.8, 160.0], [18.9, 160.0], [19.0, 160.0], [19.1, 160.0], [19.2, 160.0], [19.3, 160.0], [19.4, 160.0], [19.5, 160.0], [19.6, 160.0], [19.7, 160.0], [19.8, 160.0], [19.9, 160.0], [20.0, 160.0], [20.1, 160.0], [20.2, 160.0], [20.3, 161.0], [20.4, 161.0], [20.5, 161.0], [20.6, 161.0], [20.7, 161.0], [20.8, 162.0], [20.9, 162.0], [21.0, 163.0], [21.1, 163.0], [21.2, 163.0], [21.3, 163.0], [21.4, 163.0], [21.5, 164.0], [21.6, 164.0], [21.7, 164.0], [21.8, 164.0], [21.9, 164.0], [22.0, 164.0], [22.1, 164.0], [22.2, 164.0], [22.3, 165.0], [22.4, 165.0], [22.5, 165.0], [22.6, 165.0], [22.7, 165.0], [22.8, 166.0], [22.9, 166.0], [23.0, 166.0], [23.1, 166.0], [23.2, 166.0], [23.3, 167.0], [23.4, 167.0], [23.5, 168.0], [23.6, 168.0], [23.7, 168.0], [23.8, 169.0], [23.9, 169.0], [24.0, 169.0], [24.1, 169.0], [24.2, 169.0], [24.3, 170.0], [24.4, 170.0], [24.5, 170.0], [24.6, 170.0], [24.7, 170.0], [24.8, 170.0], [24.9, 170.0], [25.0, 170.0], [25.1, 170.0], [25.2, 170.0], [25.3, 170.0], [25.4, 170.0], [25.5, 171.0], [25.6, 171.0], [25.7, 171.0], [25.8, 172.0], [25.9, 172.0], [26.0, 172.0], [26.1, 172.0], [26.2, 172.0], [26.3, 172.0], [26.4, 172.0], [26.5, 172.0], [26.6, 172.0], [26.7, 172.0], [26.8, 172.0], [26.9, 172.0], [27.0, 173.0], [27.1, 173.0], [27.2, 173.0], [27.3, 173.0], [27.4, 173.0], [27.5, 173.0], [27.6, 173.0], [27.7, 173.0], [27.8, 174.0], [27.9, 174.0], [28.0, 174.0], [28.1, 174.0], [28.2, 174.0], [28.3, 174.0], [28.4, 174.0], [28.5, 174.0], [28.6, 174.0], [28.7, 174.0], [28.8, 175.0], [28.9, 175.0], [29.0, 176.0], [29.1, 176.0], [29.2, 176.0], [29.3, 176.0], [29.4, 176.0], [29.5, 178.0], [29.6, 178.0], [29.7, 178.0], [29.8, 178.0], [29.9, 178.0], [30.0, 180.0], [30.1, 180.0], [30.2, 180.0], [30.3, 180.0], [30.4, 180.0], [30.5, 180.0], [30.6, 180.0], [30.7, 180.0], [30.8, 181.0], [30.9, 181.0], [31.0, 182.0], [31.1, 182.0], [31.2, 182.0], [31.3, 182.0], [31.4, 182.0], [31.5, 183.0], [31.6, 183.0], [31.7, 183.0], [31.8, 183.0], [31.9, 183.0], [32.0, 183.0], [32.1, 183.0], [32.2, 183.0], [32.3, 186.0], [32.4, 186.0], [32.5, 192.0], [32.6, 192.0], [32.7, 192.0], [32.8, 193.0], [32.9, 193.0], [33.0, 196.0], [33.1, 196.0], [33.2, 196.0], [33.3, 197.0], [33.4, 197.0], [33.5, 201.0], [33.6, 201.0], [33.7, 201.0], [33.8, 202.0], [33.9, 202.0], [34.0, 204.0], [34.1, 204.0], [34.2, 204.0], [34.3, 206.0], [34.4, 206.0], [34.5, 209.0], [34.6, 209.0], [34.7, 209.0], [34.8, 216.0], [34.9, 216.0], [35.0, 216.0], [35.1, 216.0], [35.2, 216.0], [35.3, 224.0], [35.4, 224.0], [35.5, 225.0], [35.6, 225.0], [35.7, 225.0], [35.8, 228.0], [35.9, 228.0], [36.0, 233.0], [36.1, 233.0], [36.2, 233.0], [36.3, 234.0], [36.4, 234.0], [36.5, 234.0], [36.6, 234.0], [36.7, 234.0], [36.8, 234.0], [36.9, 234.0], [37.0, 235.0], [37.1, 235.0], [37.2, 235.0], [37.3, 238.0], [37.4, 238.0], [37.5, 243.0], [37.6, 243.0], [37.7, 243.0], [37.8, 244.0], [37.9, 244.0], [38.0, 245.0], [38.1, 245.0], [38.2, 245.0], [38.3, 249.0], [38.4, 249.0], [38.5, 256.0], [38.6, 256.0], [38.7, 256.0], [38.8, 258.0], [38.9, 258.0], [39.0, 262.0], [39.1, 262.0], [39.2, 262.0], [39.3, 274.0], [39.4, 274.0], [39.5, 280.0], [39.6, 280.0], [39.7, 280.0], [39.8, 281.0], [39.9, 281.0], [40.0, 283.0], [40.1, 283.0], [40.2, 283.0], [40.3, 285.0], [40.4, 285.0], [40.5, 288.0], [40.6, 288.0], [40.7, 288.0], [40.8, 292.0], [40.9, 292.0], [41.0, 294.0], [41.1, 294.0], [41.2, 294.0], [41.3, 305.0], [41.4, 305.0], [41.5, 305.0], [41.6, 305.0], [41.7, 305.0], [41.8, 333.0], [41.9, 333.0], [42.0, 340.0], [42.1, 340.0], [42.2, 340.0], [42.3, 341.0], [42.4, 341.0], [42.5, 341.0], [42.6, 341.0], [42.7, 341.0], [42.8, 354.0], [42.9, 354.0], [43.0, 391.0], [43.1, 391.0], [43.2, 391.0], [43.3, 394.0], [43.4, 394.0], [43.5, 399.0], [43.6, 399.0], [43.7, 399.0], [43.8, 409.0], [43.9, 409.0], [44.0, 422.0], [44.1, 422.0], [44.2, 422.0], [44.3, 442.0], [44.4, 442.0], [44.5, 525.0], [44.6, 525.0], [44.7, 525.0], [44.8, 548.0], [44.9, 548.0], [45.0, 554.0], [45.1, 554.0], [45.2, 554.0], [45.3, 575.0], [45.4, 575.0], [45.5, 575.0], [45.6, 575.0], [45.7, 575.0], [45.8, 618.0], [45.9, 618.0], [46.0, 694.0], [46.1, 694.0], [46.2, 694.0], [46.3, 799.0], [46.4, 799.0], [46.5, 800.0], [46.6, 800.0], [46.7, 800.0], [46.8, 800.0], [46.9, 800.0], [47.0, 822.0], [47.1, 822.0], [47.2, 822.0], [47.3, 828.0], [47.4, 828.0], [47.5, 853.0], [47.6, 853.0], [47.7, 853.0], [47.8, 871.0], [47.9, 871.0], [48.0, 945.0], [48.1, 945.0], [48.2, 945.0], [48.3, 945.0], [48.4, 945.0], [48.5, 1034.0], [48.6, 1034.0], [48.7, 1034.0], [48.8, 1086.0], [48.9, 1086.0], [49.0, 1185.0], [49.1, 1185.0], [49.2, 1185.0], [49.3, 1264.0], [49.4, 1264.0], [49.5, 1265.0], [49.6, 1265.0], [49.7, 1265.0], [49.8, 1270.0], [49.9, 1270.0], [50.0, 1277.0], [50.1, 1277.0], [50.2, 1277.0], [50.3, 1318.0], [50.4, 1318.0], [50.5, 1342.0], [50.6, 1342.0], [50.7, 1342.0], [50.8, 1363.0], [50.9, 1363.0], [51.0, 1587.0], [51.1, 1587.0], [51.2, 1587.0], [51.3, 1778.0], [51.4, 1778.0], [51.5, 1782.0], [51.6, 1782.0], [51.7, 1782.0], [51.8, 1795.0], [51.9, 1795.0], [52.0, 1817.0], [52.1, 1817.0], [52.2, 1817.0], [52.3, 1863.0], [52.4, 1863.0], [52.5, 1886.0], [52.6, 1886.0], [52.7, 1886.0], [52.8, 1903.0], [52.9, 1903.0], [53.0, 1921.0], [53.1, 1921.0], [53.2, 1921.0], [53.3, 1921.0], [53.4, 1921.0], [53.5, 1957.0], [53.6, 1957.0], [53.7, 1957.0], [53.8, 1977.0], [53.9, 1977.0], [54.0, 2026.0], [54.1, 2026.0], [54.2, 2026.0], [54.3, 2036.0], [54.4, 2036.0], [54.5, 2067.0], [54.6, 2067.0], [54.7, 2067.0], [54.8, 2068.0], [54.9, 2068.0], [55.0, 2101.0], [55.1, 2101.0], [55.2, 2101.0], [55.3, 2147.0], [55.4, 2147.0], [55.5, 2172.0], [55.6, 2172.0], [55.7, 2172.0], [55.8, 2187.0], [55.9, 2187.0], [56.0, 2225.0], [56.1, 2225.0], [56.2, 2225.0], [56.3, 2257.0], [56.4, 2257.0], [56.5, 2259.0], [56.6, 2259.0], [56.7, 2259.0], [56.8, 2261.0], [56.9, 2261.0], [57.0, 2309.0], [57.1, 2309.0], [57.2, 2309.0], [57.3, 2325.0], [57.4, 2325.0], [57.5, 2345.0], [57.6, 2345.0], [57.7, 2345.0], [57.8, 2376.0], [57.9, 2376.0], [58.0, 2386.0], [58.1, 2386.0], [58.2, 2386.0], [58.3, 2386.0], [58.4, 2386.0], [58.5, 2394.0], [58.6, 2394.0], [58.7, 2394.0], [58.8, 2448.0], [58.9, 2448.0], [59.0, 2486.0], [59.1, 2486.0], [59.2, 2486.0], [59.3, 2498.0], [59.4, 2498.0], [59.5, 2504.0], [59.6, 2504.0], [59.7, 2504.0], [59.8, 2511.0], [59.9, 2511.0], [60.0, 2517.0], [60.1, 2517.0], [60.2, 2517.0], [60.3, 2522.0], [60.4, 2522.0], [60.5, 2529.0], [60.6, 2529.0], [60.7, 2529.0], [60.8, 2553.0], [60.9, 2553.0], [61.0, 2571.0], [61.1, 2571.0], [61.2, 2571.0], [61.3, 2646.0], [61.4, 2646.0], [61.5, 2694.0], [61.6, 2694.0], [61.7, 2694.0], [61.8, 2768.0], [61.9, 2768.0], [62.0, 2807.0], [62.1, 2807.0], [62.2, 2807.0], [62.3, 2807.0], [62.4, 2807.0], [62.5, 2842.0], [62.6, 2842.0], [62.7, 2842.0], [62.8, 2843.0], [62.9, 2843.0], [63.0, 2844.0], [63.1, 2844.0], [63.2, 2844.0], [63.3, 2885.0], [63.4, 2885.0], [63.5, 2907.0], [63.6, 2907.0], [63.7, 2907.0], [63.8, 2924.0], [63.9, 2924.0], [64.0, 2927.0], [64.1, 2927.0], [64.2, 2927.0], [64.3, 2941.0], [64.4, 2941.0], [64.5, 2952.0], [64.6, 2952.0], [64.7, 2952.0], [64.8, 2953.0], [64.9, 2953.0], [65.0, 2962.0], [65.1, 2962.0], [65.2, 2962.0], [65.3, 2962.0], [65.4, 2962.0], [65.5, 2963.0], [65.6, 2963.0], [65.7, 2963.0], [65.8, 3008.0], [65.9, 3008.0], [66.0, 3012.0], [66.1, 3012.0], [66.2, 3012.0], [66.3, 3165.0], [66.4, 3165.0], [66.5, 3193.0], [66.6, 3193.0], [66.7, 3193.0], [66.8, 3281.0], [66.9, 3281.0], [67.0, 3292.0], [67.1, 3292.0], [67.2, 3292.0], [67.3, 3293.0], [67.4, 3293.0], [67.5, 3337.0], [67.6, 3337.0], [67.7, 3337.0], [67.8, 3345.0], [67.9, 3345.0], [68.0, 3349.0], [68.1, 3349.0], [68.2, 3349.0], [68.3, 3433.0], [68.4, 3433.0], [68.5, 3437.0], [68.6, 3437.0], [68.7, 3437.0], [68.8, 3464.0], [68.9, 3464.0], [69.0, 3498.0], [69.1, 3498.0], [69.2, 3498.0], [69.3, 3585.0], [69.4, 3585.0], [69.5, 3638.0], [69.6, 3638.0], [69.7, 3638.0], [69.8, 3653.0], [69.9, 3653.0], [70.0, 3687.0], [70.1, 3687.0], [70.2, 3687.0], [70.3, 3687.0], [70.4, 3687.0], [70.5, 3698.0], [70.6, 3698.0], [70.7, 3698.0], [70.8, 3719.0], [70.9, 3719.0], [71.0, 3743.0], [71.1, 3743.0], [71.2, 3743.0], [71.3, 3752.0], [71.4, 3752.0], [71.5, 3766.0], [71.6, 3766.0], [71.7, 3766.0], [71.8, 3781.0], [71.9, 3781.0], [72.0, 3792.0], [72.1, 3792.0], [72.2, 3792.0], [72.3, 3803.0], [72.4, 3803.0], [72.5, 3804.0], [72.6, 3804.0], [72.7, 3804.0], [72.8, 3809.0], [72.9, 3809.0], [73.0, 3813.0], [73.1, 3813.0], [73.2, 3813.0], [73.3, 3816.0], [73.4, 3816.0], [73.5, 3830.0], [73.6, 3830.0], [73.7, 3830.0], [73.8, 3831.0], [73.9, 3831.0], [74.0, 3883.0], [74.1, 3883.0], [74.2, 3883.0], [74.3, 3894.0], [74.4, 3894.0], [74.5, 3937.0], [74.6, 3937.0], [74.7, 3937.0], [74.8, 3952.0], [74.9, 3952.0], [75.0, 3961.0], [75.1, 3961.0], [75.2, 3961.0], [75.3, 4013.0], [75.4, 4013.0], [75.5, 4042.0], [75.6, 4042.0], [75.7, 4042.0], [75.8, 4053.0], [75.9, 4053.0], [76.0, 4083.0], [76.1, 4083.0], [76.2, 4083.0], [76.3, 4087.0], [76.4, 4087.0], [76.5, 4151.0], [76.6, 4151.0], [76.7, 4151.0], [76.8, 4177.0], [76.9, 4177.0], [77.0, 4215.0], [77.1, 4215.0], [77.2, 4215.0], [77.3, 4253.0], [77.4, 4253.0], [77.5, 4324.0], [77.6, 4324.0], [77.7, 4324.0], [77.8, 4346.0], [77.9, 4346.0], [78.0, 4384.0], [78.1, 4384.0], [78.2, 4384.0], [78.3, 4385.0], [78.4, 4385.0], [78.5, 4385.0], [78.6, 4385.0], [78.7, 4385.0], [78.8, 4389.0], [78.9, 4389.0], [79.0, 4397.0], [79.1, 4397.0], [79.2, 4397.0], [79.3, 4409.0], [79.4, 4409.0], [79.5, 4428.0], [79.6, 4428.0], [79.7, 4428.0], [79.8, 4433.0], [79.9, 4433.0], [80.0, 4473.0], [80.1, 4473.0], [80.2, 4473.0], [80.3, 4524.0], [80.4, 4524.0], [80.5, 4590.0], [80.6, 4590.0], [80.7, 4590.0], [80.8, 4600.0], [80.9, 4600.0], [81.0, 4604.0], [81.1, 4604.0], [81.2, 4604.0], [81.3, 4664.0], [81.4, 4664.0], [81.5, 4690.0], [81.6, 4690.0], [81.7, 4690.0], [81.8, 4691.0], [81.9, 4691.0], [82.0, 4702.0], [82.1, 4702.0], [82.2, 4702.0], [82.3, 4705.0], [82.4, 4705.0], [82.5, 4711.0], [82.6, 4711.0], [82.7, 4711.0], [82.8, 4753.0], [82.9, 4753.0], [83.0, 4804.0], [83.1, 4804.0], [83.2, 4804.0], [83.3, 4869.0], [83.4, 4869.0], [83.5, 4874.0], [83.6, 4874.0], [83.7, 4874.0], [83.8, 4892.0], [83.9, 4892.0], [84.0, 4904.0], [84.1, 4904.0], [84.2, 4904.0], [84.3, 4911.0], [84.4, 4911.0], [84.5, 4939.0], [84.6, 4939.0], [84.7, 4939.0], [84.8, 4948.0], [84.9, 4948.0], [85.0, 4951.0], [85.1, 4951.0], [85.2, 4951.0], [85.3, 4993.0], [85.4, 4993.0], [85.5, 5011.0], [85.6, 5011.0], [85.7, 5011.0], [85.8, 5028.0], [85.9, 5028.0], [86.0, 5028.0], [86.1, 5028.0], [86.2, 5028.0], [86.3, 5029.0], [86.4, 5029.0], [86.5, 5070.0], [86.6, 5070.0], [86.7, 5070.0], [86.8, 5074.0], [86.9, 5074.0], [87.0, 5074.0], [87.1, 5074.0], [87.2, 5074.0], [87.3, 5076.0], [87.4, 5076.0], [87.5, 5102.0], [87.6, 5102.0], [87.7, 5102.0], [87.8, 5113.0], [87.9, 5113.0], [88.0, 5146.0], [88.1, 5146.0], [88.2, 5146.0], [88.3, 5174.0], [88.4, 5174.0], [88.5, 5184.0], [88.6, 5184.0], [88.7, 5184.0], [88.8, 5186.0], [88.9, 5186.0], [89.0, 5190.0], [89.1, 5190.0], [89.2, 5190.0], [89.3, 5202.0], [89.4, 5202.0], [89.5, 5208.0], [89.6, 5208.0], [89.7, 5208.0], [89.8, 5216.0], [89.9, 5216.0], [90.0, 5219.0], [90.1, 5219.0], [90.2, 5219.0], [90.3, 5223.0], [90.4, 5223.0], [90.5, 5238.0], [90.6, 5238.0], [90.7, 5238.0], [90.8, 5240.0], [90.9, 5240.0], [91.0, 5254.0], [91.1, 5254.0], [91.2, 5254.0], [91.3, 5264.0], [91.4, 5264.0], [91.5, 5272.0], [91.6, 5272.0], [91.7, 5272.0], [91.8, 5275.0], [91.9, 5275.0], [92.0, 5287.0], [92.1, 5287.0], [92.2, 5287.0], [92.3, 5332.0], [92.4, 5332.0], [92.5, 5407.0], [92.6, 5407.0], [92.7, 5407.0], [92.8, 5506.0], [92.9, 5506.0], [93.0, 5549.0], [93.1, 5549.0], [93.2, 5549.0], [93.3, 5558.0], [93.4, 5558.0], [93.5, 5563.0], [93.6, 5563.0], [93.7, 5563.0], [93.8, 5564.0], [93.9, 5564.0], [94.0, 5570.0], [94.1, 5570.0], [94.2, 5570.0], [94.3, 5574.0], [94.4, 5574.0], [94.5, 5592.0], [94.6, 5592.0], [94.7, 5592.0], [94.8, 5603.0], [94.9, 5603.0], [95.0, 5604.0], [95.1, 5604.0], [95.2, 5604.0], [95.3, 5606.0], [95.4, 5606.0], [95.5, 5611.0], [95.6, 5611.0], [95.7, 5611.0], [95.8, 5616.0], [95.9, 5616.0], [96.0, 5628.0], [96.1, 5628.0], [96.2, 5628.0], [96.3, 5643.0], [96.4, 5643.0], [96.5, 5672.0], [96.6, 5672.0], [96.7, 5672.0], [96.8, 5678.0], [96.9, 5678.0], [97.0, 5946.0], [97.1, 5946.0], [97.2, 5946.0], [97.3, 5973.0], [97.4, 5973.0], [97.5, 6067.0], [97.6, 6067.0], [97.7, 6067.0], [97.8, 6068.0], [97.9, 6068.0], [98.0, 6074.0], [98.1, 6074.0], [98.2, 6074.0], [98.3, 6075.0], [98.4, 6075.0], [98.5, 6082.0], [98.6, 6082.0], [98.7, 6082.0], [98.8, 6091.0], [98.9, 6091.0], [99.0, 6092.0], [99.1, 6092.0], [99.2, 6092.0], [99.3, 6113.0], [99.4, 6113.0], [99.5, 6122.0], [99.6, 6122.0], [99.7, 6122.0], [99.8, 6152.0], [99.9, 6152.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 134.0, "series": [{"data": [[600.0, 2.0], [700.0, 1.0], [800.0, 6.0], [900.0, 2.0], [1000.0, 2.0], [1100.0, 1.0], [1200.0, 4.0], [1300.0, 3.0], [1500.0, 1.0], [1700.0, 3.0], [1800.0, 3.0], [1900.0, 5.0], [2000.0, 4.0], [2100.0, 4.0], [2200.0, 4.0], [2300.0, 7.0], [2400.0, 3.0], [2500.0, 7.0], [2600.0, 2.0], [2800.0, 6.0], [2700.0, 1.0], [2900.0, 9.0], [3000.0, 2.0], [3100.0, 2.0], [3300.0, 3.0], [3200.0, 3.0], [3400.0, 4.0], [3500.0, 1.0], [3600.0, 5.0], [3700.0, 6.0], [3800.0, 9.0], [3900.0, 3.0], [4000.0, 5.0], [4300.0, 7.0], [4100.0, 2.0], [4200.0, 2.0], [4400.0, 4.0], [4600.0, 5.0], [4500.0, 2.0], [4800.0, 4.0], [4700.0, 4.0], [4900.0, 6.0], [5100.0, 7.0], [5000.0, 8.0], [5200.0, 12.0], [5300.0, 1.0], [5500.0, 8.0], [5600.0, 9.0], [5400.0, 1.0], [6000.0, 7.0], [6100.0, 3.0], [5900.0, 2.0], [100.0, 134.0], [200.0, 31.0], [300.0, 10.0], [400.0, 3.0], [500.0, 5.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 6100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 196.0, "series": [{"data": [[0.0, 178.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 26.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 196.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.988235294117649, "minX": 1.72880106E12, "maxY": 99.39047619047625, "series": [{"data": [[1.72880112E12, 7.988235294117649], [1.72880106E12, 99.39047619047625]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880112E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 152.19354838709677, "minX": 1.0, "maxY": 6152.0, "series": [{"data": [[2.0, 243.66666666666666], [3.0, 245.0], [4.0, 367.3333333333333], [5.0, 295.0], [6.0, 152.19354838709677], [7.0, 159.10204081632654], [8.0, 199.43333333333334], [9.0, 215.4], [10.0, 222.90909090909088], [11.0, 175.0], [12.0, 168.8], [13.0, 165.6], [15.0, 340.5], [17.0, 1181.5], [18.0, 1363.0], [20.0, 1267.0], [21.0, 1265.0], [22.0, 6152.0], [23.0, 3813.0], [25.0, 394.0], [26.0, 2111.0], [28.0, 5678.0], [29.0, 2388.5], [31.0, 2500.5], [36.0, 4547.0], [41.0, 3817.0], [40.0, 4691.0], [45.0, 4454.0], [44.0, 4874.0], [47.0, 5275.0], [48.0, 5075.0], [50.0, 3803.0], [53.0, 4462.75], [55.0, 3804.0], [59.0, 4087.0], [58.0, 3792.0], [65.0, 6068.0], [71.0, 3720.090909090909], [70.0, 4433.0], [69.0, 3464.0], [68.0, 4924.0], [75.0, 3500.75], [73.0, 4705.0], [79.0, 2842.0], [78.0, 2924.0], [82.0, 800.0], [81.0, 2952.0], [87.0, 2499.5], [86.0, 2349.1666666666665], [85.0, 3072.75], [84.0, 2081.3333333333335], [91.0, 2522.0], [90.0, 2463.0], [89.0, 2807.0], [88.0, 525.0], [94.0, 2504.0], [93.0, 2394.0], [92.0, 2376.0], [99.0, 2336.5], [98.0, 2345.0], [97.0, 1817.0], [96.0, 2498.0], [102.0, 2172.0], [101.0, 2213.0], [107.0, 2068.0], [106.0, 2147.0], [105.0, 2026.0], [104.0, 2283.0], [115.0, 2214.166666666667], [113.0, 1903.0], [112.0, 1990.0], [118.0, 3937.0], [117.0, 354.0], [116.0, 4532.5], [122.0, 2768.0], [121.0, 4777.5], [120.0, 4951.0], [127.0, 5407.0], [124.0, 3324.3333333333335], [135.0, 5065.0], [131.0, 3901.25], [129.0, 4409.0], [130.0, 5287.0], [142.0, 3281.0], [139.0, 1342.0], [138.0, 4456.25], [136.0, 4753.0], [137.0, 5574.5], [148.0, 5055.0], [145.0, 5011.0], [144.0, 4642.0], [159.0, 3432.5], [158.0, 4892.0], [157.0, 5592.0], [156.0, 5285.25], [155.0, 4813.5], [153.0, 5406.0], [165.0, 4340.0], [164.0, 3654.5], [166.0, 5208.0], [161.0, 4664.0], [160.0, 4882.0], [175.0, 5076.0], [174.0, 1851.5], [172.0, 2187.0], [171.0, 4428.0], [170.0, 3069.25], [169.0, 3498.0], [183.0, 4911.0], [182.0, 5113.0], [179.0, 3509.0], [178.0, 3425.5], [180.0, 5028.0], [177.0, 2718.5], [191.0, 280.5], [189.0, 2745.0], [186.0, 4952.8], [198.0, 2907.0], [197.0, 5146.5], [194.0, 4435.333333333333], [192.0, 4804.0], [205.0, 5029.0], [203.0, 4384.0], [202.0, 5184.0], [201.0, 5216.0], [200.0, 2112.0], [210.0, 2256.0], [214.0, 3337.0], [213.0, 4151.0], [212.0, 3830.0], [211.0, 5174.0], [208.0, 2247.75], [223.0, 193.0], [222.0, 1224.6666666666667], [220.0, 2309.0], [218.0, 234.5], [217.0, 225.0], [216.0, 341.0], [227.0, 4948.0], [229.0, 516.5], [228.0, 554.0], [226.0, 244.0], [225.0, 828.0], [224.0, 212.66666666666666], [1.0, 207.0]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[79.96750000000003, 2098.942500000001]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 229.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 174.25, "minX": 1.72880106E12, "maxY": 10164.0, "series": [{"data": [[1.72880112E12, 2742.6666666666665], [1.72880106E12, 10164.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72880112E12, 174.25], [1.72880106E12, 645.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880112E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 168.5176470588235, "minX": 1.72880106E12, "maxY": 2619.8507936507945, "series": [{"data": [[1.72880112E12, 168.5176470588235], [1.72880106E12, 2619.8507936507945]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880112E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 167.09411764705882, "minX": 1.72880106E12, "maxY": 2579.977777777778, "series": [{"data": [[1.72880112E12, 167.09411764705882], [1.72880106E12, 2579.977777777778]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880112E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 102.65882352941178, "minX": 1.72880106E12, "maxY": 2450.8190476190466, "series": [{"data": [[1.72880112E12, 102.65882352941178], [1.72880106E12, 2450.8190476190466]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880112E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 125.0, "minX": 1.72880106E12, "maxY": 6152.0, "series": [{"data": [[1.72880112E12, 285.0], [1.72880106E12, 6152.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72880112E12, 125.0], [1.72880106E12, 125.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72880112E12, 219.00000000000014], [1.72880106E12, 5305.000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72880112E12, 285.0], [1.72880106E12, 6109.639999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72880112E12, 160.0], [1.72880106E12, 2529.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72880112E12, 260.20000000000005], [1.72880106E12, 5631.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880112E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 152.0, "minX": 6.0, "maxY": 3345.0, "series": [{"data": [[38.0, 152.0], [40.0, 162.5], [183.0, 3345.0], [88.0, 1273.5], [45.0, 156.0], [6.0, 406.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 183.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 150.0, "minX": 6.0, "maxY": 3290.0, "series": [{"data": [[38.0, 150.0], [40.0, 160.5], [183.0, 3290.0], [88.0, 1273.5], [45.0, 155.0], [6.0, 393.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 183.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.72880106E12, "maxY": 5.383333333333334, "series": [{"data": [[1.72880112E12, 1.2833333333333334], [1.72880106E12, 5.383333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880112E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.72880106E12, "maxY": 5.25, "series": [{"data": [[1.72880112E12, 1.4166666666666667], [1.72880106E12, 5.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880112E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.72880106E12, "maxY": 5.25, "series": [{"data": [[1.72880112E12, 1.4166666666666667], [1.72880106E12, 5.25]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880112E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4166666666666667, "minX": 1.72880106E12, "maxY": 5.25, "series": [{"data": [[1.72880112E12, 1.4166666666666667], [1.72880106E12, 5.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880112E12, "title": "Total Transactions Per Second"}},
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

