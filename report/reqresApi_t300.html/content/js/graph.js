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
        data: {"result": {"minY": 110.0, "minX": 0.0, "maxY": 5522.0, "series": [{"data": [[0.0, 110.0], [0.1, 110.0], [0.2, 110.0], [0.3, 110.0], [0.4, 125.0], [0.5, 125.0], [0.6, 125.0], [0.7, 127.0], [0.8, 127.0], [0.9, 127.0], [1.0, 128.0], [1.1, 128.0], [1.2, 128.0], [1.3, 128.0], [1.4, 129.0], [1.5, 129.0], [1.6, 129.0], [1.7, 131.0], [1.8, 131.0], [1.9, 131.0], [2.0, 132.0], [2.1, 132.0], [2.2, 132.0], [2.3, 132.0], [2.4, 134.0], [2.5, 134.0], [2.6, 134.0], [2.7, 134.0], [2.8, 134.0], [2.9, 134.0], [3.0, 136.0], [3.1, 136.0], [3.2, 136.0], [3.3, 136.0], [3.4, 137.0], [3.5, 137.0], [3.6, 137.0], [3.7, 139.0], [3.8, 139.0], [3.9, 139.0], [4.0, 139.0], [4.1, 139.0], [4.2, 139.0], [4.3, 139.0], [4.4, 140.0], [4.5, 140.0], [4.6, 140.0], [4.7, 140.0], [4.8, 140.0], [4.9, 140.0], [5.0, 140.0], [5.1, 140.0], [5.2, 140.0], [5.3, 140.0], [5.4, 140.0], [5.5, 140.0], [5.6, 140.0], [5.7, 140.0], [5.8, 140.0], [5.9, 140.0], [6.0, 141.0], [6.1, 141.0], [6.2, 141.0], [6.3, 141.0], [6.4, 141.0], [6.5, 141.0], [6.6, 141.0], [6.7, 142.0], [6.8, 142.0], [6.9, 142.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 143.0], [7.6, 143.0], [7.7, 143.0], [7.8, 143.0], [7.9, 143.0], [8.0, 143.0], [8.1, 143.0], [8.2, 143.0], [8.3, 143.0], [8.4, 143.0], [8.5, 143.0], [8.6, 143.0], [8.7, 143.0], [8.8, 143.0], [8.9, 143.0], [9.0, 144.0], [9.1, 144.0], [9.2, 144.0], [9.3, 144.0], [9.4, 144.0], [9.5, 144.0], [9.6, 144.0], [9.7, 145.0], [9.8, 145.0], [9.9, 145.0], [10.0, 145.0], [10.1, 145.0], [10.2, 145.0], [10.3, 145.0], [10.4, 145.0], [10.5, 145.0], [10.6, 145.0], [10.7, 146.0], [10.8, 146.0], [10.9, 146.0], [11.0, 146.0], [11.1, 146.0], [11.2, 146.0], [11.3, 146.0], [11.4, 146.0], [11.5, 146.0], [11.6, 146.0], [11.7, 146.0], [11.8, 146.0], [11.9, 146.0], [12.0, 146.0], [12.1, 146.0], [12.2, 146.0], [12.3, 146.0], [12.4, 148.0], [12.5, 148.0], [12.6, 148.0], [12.7, 148.0], [12.8, 148.0], [12.9, 148.0], [13.0, 149.0], [13.1, 149.0], [13.2, 149.0], [13.3, 149.0], [13.4, 149.0], [13.5, 149.0], [13.6, 149.0], [13.7, 149.0], [13.8, 149.0], [13.9, 149.0], [14.0, 150.0], [14.1, 150.0], [14.2, 150.0], [14.3, 150.0], [14.4, 150.0], [14.5, 150.0], [14.6, 150.0], [14.7, 151.0], [14.8, 151.0], [14.9, 151.0], [15.0, 152.0], [15.1, 152.0], [15.2, 152.0], [15.3, 152.0], [15.4, 152.0], [15.5, 152.0], [15.6, 152.0], [15.7, 152.0], [15.8, 152.0], [15.9, 152.0], [16.0, 152.0], [16.1, 152.0], [16.2, 152.0], [16.3, 152.0], [16.4, 152.0], [16.5, 152.0], [16.6, 152.0], [16.7, 153.0], [16.8, 153.0], [16.9, 153.0], [17.0, 154.0], [17.1, 154.0], [17.2, 154.0], [17.3, 154.0], [17.4, 154.0], [17.5, 154.0], [17.6, 154.0], [17.7, 154.0], [17.8, 154.0], [17.9, 154.0], [18.0, 154.0], [18.1, 154.0], [18.2, 154.0], [18.3, 154.0], [18.4, 155.0], [18.5, 155.0], [18.6, 155.0], [18.7, 155.0], [18.8, 155.0], [18.9, 155.0], [19.0, 157.0], [19.1, 157.0], [19.2, 157.0], [19.3, 157.0], [19.4, 157.0], [19.5, 157.0], [19.6, 157.0], [19.7, 159.0], [19.8, 159.0], [19.9, 159.0], [20.0, 159.0], [20.1, 159.0], [20.2, 159.0], [20.3, 159.0], [20.4, 159.0], [20.5, 159.0], [20.6, 159.0], [20.7, 160.0], [20.8, 160.0], [20.9, 160.0], [21.0, 160.0], [21.1, 160.0], [21.2, 160.0], [21.3, 160.0], [21.4, 161.0], [21.5, 161.0], [21.6, 161.0], [21.7, 161.0], [21.8, 161.0], [21.9, 161.0], [22.0, 161.0], [22.1, 161.0], [22.2, 161.0], [22.3, 161.0], [22.4, 162.0], [22.5, 162.0], [22.6, 162.0], [22.7, 162.0], [22.8, 162.0], [22.9, 162.0], [23.0, 163.0], [23.1, 163.0], [23.2, 163.0], [23.3, 163.0], [23.4, 163.0], [23.5, 163.0], [23.6, 163.0], [23.7, 165.0], [23.8, 165.0], [23.9, 165.0], [24.0, 165.0], [24.1, 165.0], [24.2, 165.0], [24.3, 165.0], [24.4, 165.0], [24.5, 165.0], [24.6, 165.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 166.0], [25.1, 166.0], [25.2, 166.0], [25.3, 166.0], [25.4, 166.0], [25.5, 166.0], [25.6, 166.0], [25.7, 167.0], [25.8, 167.0], [25.9, 167.0], [26.0, 168.0], [26.1, 168.0], [26.2, 168.0], [26.3, 168.0], [26.4, 168.0], [26.5, 168.0], [26.6, 168.0], [26.7, 169.0], [26.8, 169.0], [26.9, 169.0], [27.0, 169.0], [27.1, 169.0], [27.2, 169.0], [27.3, 169.0], [27.4, 172.0], [27.5, 172.0], [27.6, 172.0], [27.7, 172.0], [27.8, 172.0], [27.9, 172.0], [28.0, 172.0], [28.1, 174.0], [28.2, 174.0], [28.3, 174.0], [28.4, 178.0], [28.5, 178.0], [28.6, 178.0], [28.7, 178.0], [28.8, 178.0], [28.9, 178.0], [29.0, 178.0], [29.1, 181.0], [29.2, 181.0], [29.3, 181.0], [29.4, 183.0], [29.5, 183.0], [29.6, 183.0], [29.7, 183.0], [29.8, 183.0], [29.9, 183.0], [30.0, 183.0], [30.1, 186.0], [30.2, 186.0], [30.3, 186.0], [30.4, 187.0], [30.5, 187.0], [30.6, 187.0], [30.7, 188.0], [30.8, 188.0], [30.9, 188.0], [31.0, 193.0], [31.1, 193.0], [31.2, 193.0], [31.3, 193.0], [31.4, 198.0], [31.5, 198.0], [31.6, 198.0], [31.7, 199.0], [31.8, 199.0], [31.9, 199.0], [32.0, 200.0], [32.1, 200.0], [32.2, 200.0], [32.3, 200.0], [32.4, 206.0], [32.5, 206.0], [32.6, 206.0], [32.7, 207.0], [32.8, 207.0], [32.9, 207.0], [33.0, 209.0], [33.1, 209.0], [33.2, 209.0], [33.3, 209.0], [33.4, 213.0], [33.5, 213.0], [33.6, 213.0], [33.7, 220.0], [33.8, 220.0], [33.9, 220.0], [34.0, 220.0], [34.1, 228.0], [34.2, 228.0], [34.3, 228.0], [34.4, 239.0], [34.5, 239.0], [34.6, 239.0], [34.7, 240.0], [34.8, 240.0], [34.9, 240.0], [35.0, 240.0], [35.1, 240.0], [35.2, 240.0], [35.3, 240.0], [35.4, 242.0], [35.5, 242.0], [35.6, 242.0], [35.7, 243.0], [35.8, 243.0], [35.9, 243.0], [36.0, 243.0], [36.1, 244.0], [36.2, 244.0], [36.3, 244.0], [36.4, 246.0], [36.5, 246.0], [36.6, 246.0], [36.7, 249.0], [36.8, 249.0], [36.9, 249.0], [37.0, 249.0], [37.1, 251.0], [37.2, 251.0], [37.3, 251.0], [37.4, 254.0], [37.5, 254.0], [37.6, 254.0], [37.7, 264.0], [37.8, 264.0], [37.9, 264.0], [38.0, 264.0], [38.1, 267.0], [38.2, 267.0], [38.3, 267.0], [38.4, 267.0], [38.5, 267.0], [38.6, 267.0], [38.7, 273.0], [38.8, 273.0], [38.9, 273.0], [39.0, 273.0], [39.1, 284.0], [39.2, 284.0], [39.3, 284.0], [39.4, 285.0], [39.5, 285.0], [39.6, 285.0], [39.7, 285.0], [39.8, 285.0], [39.9, 285.0], [40.0, 285.0], [40.1, 297.0], [40.2, 297.0], [40.3, 297.0], [40.4, 298.0], [40.5, 298.0], [40.6, 298.0], [40.7, 301.0], [40.8, 301.0], [40.9, 301.0], [41.0, 301.0], [41.1, 305.0], [41.2, 305.0], [41.3, 305.0], [41.4, 322.0], [41.5, 322.0], [41.6, 322.0], [41.7, 333.0], [41.8, 333.0], [41.9, 333.0], [42.0, 333.0], [42.1, 333.0], [42.2, 333.0], [42.3, 333.0], [42.4, 337.0], [42.5, 337.0], [42.6, 337.0], [42.7, 355.0], [42.8, 355.0], [42.9, 355.0], [43.0, 355.0], [43.1, 371.0], [43.2, 371.0], [43.3, 371.0], [43.4, 403.0], [43.5, 403.0], [43.6, 403.0], [43.7, 417.0], [43.8, 417.0], [43.9, 417.0], [44.0, 417.0], [44.1, 421.0], [44.2, 421.0], [44.3, 421.0], [44.4, 423.0], [44.5, 423.0], [44.6, 423.0], [44.7, 424.0], [44.8, 424.0], [44.9, 424.0], [45.0, 424.0], [45.1, 427.0], [45.2, 427.0], [45.3, 427.0], [45.4, 427.0], [45.5, 427.0], [45.6, 427.0], [45.7, 428.0], [45.8, 428.0], [45.9, 428.0], [46.0, 428.0], [46.1, 429.0], [46.2, 429.0], [46.3, 429.0], [46.4, 430.0], [46.5, 430.0], [46.6, 430.0], [46.7, 431.0], [46.8, 431.0], [46.9, 431.0], [47.0, 431.0], [47.1, 434.0], [47.2, 434.0], [47.3, 434.0], [47.4, 434.0], [47.5, 434.0], [47.6, 434.0], [47.7, 434.0], [47.8, 434.0], [47.9, 434.0], [48.0, 434.0], [48.1, 434.0], [48.2, 434.0], [48.3, 434.0], [48.4, 434.0], [48.5, 434.0], [48.6, 434.0], [48.7, 438.0], [48.8, 438.0], [48.9, 438.0], [49.0, 438.0], [49.1, 440.0], [49.2, 440.0], [49.3, 440.0], [49.4, 441.0], [49.5, 441.0], [49.6, 441.0], [49.7, 448.0], [49.8, 448.0], [49.9, 448.0], [50.0, 448.0], [50.1, 451.0], [50.2, 451.0], [50.3, 451.0], [50.4, 462.0], [50.5, 462.0], [50.6, 462.0], [50.7, 462.0], [50.8, 462.0], [50.9, 462.0], [51.0, 462.0], [51.1, 467.0], [51.2, 467.0], [51.3, 467.0], [51.4, 479.0], [51.5, 479.0], [51.6, 479.0], [51.7, 487.0], [51.8, 487.0], [51.9, 487.0], [52.0, 487.0], [52.1, 488.0], [52.2, 488.0], [52.3, 488.0], [52.4, 495.0], [52.5, 495.0], [52.6, 495.0], [52.7, 516.0], [52.8, 516.0], [52.9, 516.0], [53.0, 516.0], [53.1, 538.0], [53.2, 538.0], [53.3, 538.0], [53.4, 550.0], [53.5, 550.0], [53.6, 550.0], [53.7, 578.0], [53.8, 578.0], [53.9, 578.0], [54.0, 578.0], [54.1, 586.0], [54.2, 586.0], [54.3, 586.0], [54.4, 601.0], [54.5, 601.0], [54.6, 601.0], [54.7, 602.0], [54.8, 602.0], [54.9, 602.0], [55.0, 602.0], [55.1, 633.0], [55.2, 633.0], [55.3, 633.0], [55.4, 650.0], [55.5, 650.0], [55.6, 650.0], [55.7, 658.0], [55.8, 658.0], [55.9, 658.0], [56.0, 658.0], [56.1, 702.0], [56.2, 702.0], [56.3, 702.0], [56.4, 704.0], [56.5, 704.0], [56.6, 704.0], [56.7, 709.0], [56.8, 709.0], [56.9, 709.0], [57.0, 709.0], [57.1, 710.0], [57.2, 710.0], [57.3, 710.0], [57.4, 712.0], [57.5, 712.0], [57.6, 712.0], [57.7, 714.0], [57.8, 714.0], [57.9, 714.0], [58.0, 714.0], [58.1, 715.0], [58.2, 715.0], [58.3, 715.0], [58.4, 720.0], [58.5, 720.0], [58.6, 720.0], [58.7, 722.0], [58.8, 722.0], [58.9, 722.0], [59.0, 722.0], [59.1, 722.0], [59.2, 722.0], [59.3, 722.0], [59.4, 723.0], [59.5, 723.0], [59.6, 723.0], [59.7, 725.0], [59.8, 725.0], [59.9, 725.0], [60.0, 725.0], [60.1, 726.0], [60.2, 726.0], [60.3, 726.0], [60.4, 731.0], [60.5, 731.0], [60.6, 731.0], [60.7, 737.0], [60.8, 737.0], [60.9, 737.0], [61.0, 737.0], [61.1, 741.0], [61.2, 741.0], [61.3, 741.0], [61.4, 769.0], [61.5, 769.0], [61.6, 769.0], [61.7, 770.0], [61.8, 770.0], [61.9, 770.0], [62.0, 770.0], [62.1, 778.0], [62.2, 778.0], [62.3, 778.0], [62.4, 787.0], [62.5, 787.0], [62.6, 787.0], [62.7, 789.0], [62.8, 789.0], [62.9, 789.0], [63.0, 789.0], [63.1, 789.0], [63.2, 789.0], [63.3, 789.0], [63.4, 792.0], [63.5, 792.0], [63.6, 792.0], [63.7, 794.0], [63.8, 794.0], [63.9, 794.0], [64.0, 794.0], [64.1, 795.0], [64.2, 795.0], [64.3, 795.0], [64.4, 797.0], [64.5, 797.0], [64.6, 797.0], [64.7, 1920.0], [64.8, 1920.0], [64.9, 1920.0], [65.0, 1920.0], [65.1, 1939.0], [65.2, 1939.0], [65.3, 1939.0], [65.4, 2011.0], [65.5, 2011.0], [65.6, 2011.0], [65.7, 2121.0], [65.8, 2121.0], [65.9, 2121.0], [66.0, 2121.0], [66.1, 2180.0], [66.2, 2180.0], [66.3, 2180.0], [66.4, 2359.0], [66.5, 2359.0], [66.6, 2359.0], [66.7, 2444.0], [66.8, 2444.0], [66.9, 2444.0], [67.0, 2444.0], [67.1, 2532.0], [67.2, 2532.0], [67.3, 2532.0], [67.4, 2611.0], [67.5, 2611.0], [67.6, 2611.0], [67.7, 2689.0], [67.8, 2689.0], [67.9, 2689.0], [68.0, 2689.0], [68.1, 2710.0], [68.2, 2710.0], [68.3, 2710.0], [68.4, 2743.0], [68.5, 2743.0], [68.6, 2743.0], [68.7, 2755.0], [68.8, 2755.0], [68.9, 2755.0], [69.0, 2755.0], [69.1, 2763.0], [69.2, 2763.0], [69.3, 2763.0], [69.4, 2776.0], [69.5, 2776.0], [69.6, 2776.0], [69.7, 2781.0], [69.8, 2781.0], [69.9, 2781.0], [70.0, 2781.0], [70.1, 2798.0], [70.2, 2798.0], [70.3, 2798.0], [70.4, 2825.0], [70.5, 2825.0], [70.6, 2825.0], [70.7, 2856.0], [70.8, 2856.0], [70.9, 2856.0], [71.0, 2856.0], [71.1, 2857.0], [71.2, 2857.0], [71.3, 2857.0], [71.4, 2900.0], [71.5, 2900.0], [71.6, 2900.0], [71.7, 2936.0], [71.8, 2936.0], [71.9, 2936.0], [72.0, 2936.0], [72.1, 2950.0], [72.2, 2950.0], [72.3, 2950.0], [72.4, 3066.0], [72.5, 3066.0], [72.6, 3066.0], [72.7, 3100.0], [72.8, 3100.0], [72.9, 3100.0], [73.0, 3100.0], [73.1, 3102.0], [73.2, 3102.0], [73.3, 3102.0], [73.4, 3139.0], [73.5, 3139.0], [73.6, 3139.0], [73.7, 3147.0], [73.8, 3147.0], [73.9, 3147.0], [74.0, 3180.0], [74.1, 3180.0], [74.2, 3180.0], [74.3, 3180.0], [74.4, 3188.0], [74.5, 3188.0], [74.6, 3188.0], [74.7, 3207.0], [74.8, 3207.0], [74.9, 3207.0], [75.0, 3224.0], [75.1, 3224.0], [75.2, 3224.0], [75.3, 3224.0], [75.4, 3238.0], [75.5, 3238.0], [75.6, 3238.0], [75.7, 3275.0], [75.8, 3275.0], [75.9, 3275.0], [76.0, 3284.0], [76.1, 3284.0], [76.2, 3284.0], [76.3, 3284.0], [76.4, 3336.0], [76.5, 3336.0], [76.6, 3336.0], [76.7, 3337.0], [76.8, 3337.0], [76.9, 3337.0], [77.0, 3359.0], [77.1, 3359.0], [77.2, 3359.0], [77.3, 3359.0], [77.4, 3376.0], [77.5, 3376.0], [77.6, 3376.0], [77.7, 3390.0], [77.8, 3390.0], [77.9, 3390.0], [78.0, 3393.0], [78.1, 3393.0], [78.2, 3393.0], [78.3, 3393.0], [78.4, 3394.0], [78.5, 3394.0], [78.6, 3394.0], [78.7, 3569.0], [78.8, 3569.0], [78.9, 3569.0], [79.0, 3604.0], [79.1, 3604.0], [79.2, 3604.0], [79.3, 3604.0], [79.4, 3675.0], [79.5, 3675.0], [79.6, 3675.0], [79.7, 3684.0], [79.8, 3684.0], [79.9, 3684.0], [80.0, 3692.0], [80.1, 3692.0], [80.2, 3692.0], [80.3, 3692.0], [80.4, 3708.0], [80.5, 3708.0], [80.6, 3708.0], [80.7, 3750.0], [80.8, 3750.0], [80.9, 3750.0], [81.0, 3808.0], [81.1, 3808.0], [81.2, 3808.0], [81.3, 3808.0], [81.4, 3844.0], [81.5, 3844.0], [81.6, 3844.0], [81.7, 3861.0], [81.8, 3861.0], [81.9, 3861.0], [82.0, 3867.0], [82.1, 3867.0], [82.2, 3867.0], [82.3, 3867.0], [82.4, 3962.0], [82.5, 3962.0], [82.6, 3962.0], [82.7, 4016.0], [82.8, 4016.0], [82.9, 4016.0], [83.0, 4056.0], [83.1, 4056.0], [83.2, 4056.0], [83.3, 4056.0], [83.4, 4098.0], [83.5, 4098.0], [83.6, 4098.0], [83.7, 4109.0], [83.8, 4109.0], [83.9, 4109.0], [84.0, 4109.0], [84.1, 4109.0], [84.2, 4109.0], [84.3, 4109.0], [84.4, 4218.0], [84.5, 4218.0], [84.6, 4218.0], [84.7, 4223.0], [84.8, 4223.0], [84.9, 4223.0], [85.0, 4236.0], [85.1, 4236.0], [85.2, 4236.0], [85.3, 4236.0], [85.4, 4262.0], [85.5, 4262.0], [85.6, 4262.0], [85.7, 4344.0], [85.8, 4344.0], [85.9, 4344.0], [86.0, 4356.0], [86.1, 4356.0], [86.2, 4356.0], [86.3, 4356.0], [86.4, 4429.0], [86.5, 4429.0], [86.6, 4429.0], [86.7, 4441.0], [86.8, 4441.0], [86.9, 4441.0], [87.0, 4445.0], [87.1, 4445.0], [87.2, 4445.0], [87.3, 4445.0], [87.4, 4463.0], [87.5, 4463.0], [87.6, 4463.0], [87.7, 4493.0], [87.8, 4493.0], [87.9, 4493.0], [88.0, 4522.0], [88.1, 4522.0], [88.2, 4522.0], [88.3, 4522.0], [88.4, 4533.0], [88.5, 4533.0], [88.6, 4533.0], [88.7, 4612.0], [88.8, 4612.0], [88.9, 4612.0], [89.0, 4615.0], [89.1, 4615.0], [89.2, 4615.0], [89.3, 4615.0], [89.4, 4727.0], [89.5, 4727.0], [89.6, 4727.0], [89.7, 4844.0], [89.8, 4844.0], [89.9, 4844.0], [90.0, 4856.0], [90.1, 4856.0], [90.2, 4856.0], [90.3, 4856.0], [90.4, 4857.0], [90.5, 4857.0], [90.6, 4857.0], [90.7, 4873.0], [90.8, 4873.0], [90.9, 4873.0], [91.0, 4875.0], [91.1, 4875.0], [91.2, 4875.0], [91.3, 4875.0], [91.4, 4908.0], [91.5, 4908.0], [91.6, 4908.0], [91.7, 4930.0], [91.8, 4930.0], [91.9, 4930.0], [92.0, 5045.0], [92.1, 5045.0], [92.2, 5045.0], [92.3, 5045.0], [92.4, 5066.0], [92.5, 5066.0], [92.6, 5066.0], [92.7, 5151.0], [92.8, 5151.0], [92.9, 5151.0], [93.0, 5166.0], [93.1, 5166.0], [93.2, 5166.0], [93.3, 5166.0], [93.4, 5173.0], [93.5, 5173.0], [93.6, 5173.0], [93.7, 5223.0], [93.8, 5223.0], [93.9, 5223.0], [94.0, 5238.0], [94.1, 5238.0], [94.2, 5238.0], [94.3, 5238.0], [94.4, 5261.0], [94.5, 5261.0], [94.6, 5261.0], [94.7, 5291.0], [94.8, 5291.0], [94.9, 5291.0], [95.0, 5291.0], [95.1, 5291.0], [95.2, 5291.0], [95.3, 5291.0], [95.4, 5298.0], [95.5, 5298.0], [95.6, 5298.0], [95.7, 5301.0], [95.8, 5301.0], [95.9, 5301.0], [96.0, 5302.0], [96.1, 5302.0], [96.2, 5302.0], [96.3, 5302.0], [96.4, 5307.0], [96.5, 5307.0], [96.6, 5307.0], [96.7, 5313.0], [96.8, 5313.0], [96.9, 5313.0], [97.0, 5321.0], [97.1, 5321.0], [97.2, 5321.0], [97.3, 5321.0], [97.4, 5419.0], [97.5, 5419.0], [97.6, 5419.0], [97.7, 5435.0], [97.8, 5435.0], [97.9, 5435.0], [98.0, 5463.0], [98.1, 5463.0], [98.2, 5463.0], [98.3, 5463.0], [98.4, 5480.0], [98.5, 5480.0], [98.6, 5480.0], [98.7, 5511.0], [98.8, 5511.0], [98.9, 5511.0], [99.0, 5513.0], [99.1, 5513.0], [99.2, 5513.0], [99.3, 5513.0], [99.4, 5522.0], [99.5, 5522.0], [99.6, 5522.0], [99.7, 5522.0], [99.8, 5522.0], [99.9, 5522.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 96.0, "series": [{"data": [[600.0, 5.0], [700.0, 26.0], [100.0, 96.0], [1900.0, 2.0], [2000.0, 1.0], [2100.0, 2.0], [2300.0, 1.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 7.0], [2800.0, 3.0], [2900.0, 3.0], [3000.0, 1.0], [3100.0, 6.0], [3200.0, 5.0], [200.0, 26.0], [3300.0, 7.0], [3500.0, 1.0], [3600.0, 4.0], [3700.0, 2.0], [3800.0, 4.0], [3900.0, 1.0], [4000.0, 3.0], [4200.0, 4.0], [4300.0, 2.0], [4100.0, 2.0], [4400.0, 5.0], [4500.0, 2.0], [4600.0, 2.0], [4800.0, 5.0], [4700.0, 1.0], [300.0, 8.0], [5100.0, 3.0], [4900.0, 2.0], [5000.0, 2.0], [5300.0, 5.0], [5200.0, 6.0], [5400.0, 4.0], [5500.0, 4.0], [400.0, 28.0], [500.0, 5.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 36.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 158.0, "series": [{"data": [[0.0, 158.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 106.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 54.283333333333296, "minX": 1.72880076E12, "maxY": 54.283333333333296, "series": [{"data": [[1.72880076E12, 54.283333333333296]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880076E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 138.5, "minX": 1.0, "maxY": 5522.0, "series": [{"data": [[2.0, 143.0], [3.0, 166.0], [4.0, 138.5], [5.0, 157.26086956521735], [6.0, 167.3478260869565], [7.0, 179.6], [8.0, 236.375], [9.0, 242.28571428571428], [10.0, 260.5], [11.0, 335.44444444444446], [12.0, 216.0], [13.0, 606.0], [14.0, 291.2], [15.0, 269.5], [16.0, 163.33333333333334], [18.0, 792.0], [19.0, 770.6666666666666], [21.0, 770.75], [22.0, 768.0], [23.0, 528.0], [24.0, 729.3333333333334], [27.0, 719.0], [30.0, 1201.3333333333333], [31.0, 1386.3333333333333], [33.0, 704.0], [32.0, 723.0], [35.0, 2886.6], [34.0, 434.0], [39.0, 2877.6666666666665], [38.0, 3238.0], [43.0, 3230.0], [42.0, 3376.0], [45.0, 4615.0], [47.0, 3783.0], [49.0, 4236.0], [51.0, 3729.0], [53.0, 5066.0], [52.0, 2776.0], [55.0, 3962.0], [56.0, 4727.0], [59.0, 4493.0], [58.0, 4840.0], [61.0, 658.0], [60.0, 3985.5], [62.0, 650.0], [68.0, 3667.666666666667], [72.0, 4341.333333333333], [79.0, 4844.0], [78.0, 5463.0], [77.0, 5419.0], [76.0, 5238.0], [83.0, 5522.0], [82.0, 5522.0], [80.0, 4533.0], [85.0, 5166.0], [91.0, 2121.0], [90.0, 5261.0], [89.0, 3147.0], [88.0, 4463.0], [94.0, 3180.0], [99.0, 3714.8333333333335], [101.0, 4507.0], [107.0, 602.0], [106.0, 3336.0], [110.0, 3750.0], [109.0, 243.0], [108.0, 243.0], [115.0, 1920.0], [114.0, 2781.0], [113.0, 2780.8], [112.0, 1939.0], [119.0, 436.0], [117.0, 3343.0], [123.0, 538.0], [122.0, 502.3333333333333], [127.0, 429.0], [125.0, 5173.0], [124.0, 2011.0], [135.0, 3675.0], [134.0, 2755.0], [133.0, 430.5], [132.0, 434.0], [131.0, 438.0], [129.0, 434.0], [143.0, 488.0], [142.0, 3684.0], [141.0, 1676.0], [139.0, 427.3333333333333], [137.0, 2662.6666666666665], [149.0, 2444.0], [148.0, 4891.5], [147.0, 2950.0], [145.0, 1612.5], [144.0, 3188.0], [159.0, 4514.0], [157.0, 4578.5], [152.0, 3569.0], [166.0, 3985.5333333333333], [163.0, 4583.666666666667], [162.0, 3624.0], [1.0, 153.0]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[54.283333333333296, 1602.9199999999987]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 166.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 615.0, "minX": 1.72880076E12, "maxY": 9680.0, "series": [{"data": [[1.72880076E12, 9680.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72880076E12, 615.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880076E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1602.9199999999987, "minX": 1.72880076E12, "maxY": 1602.9199999999987, "series": [{"data": [[1.72880076E12, 1602.9199999999987]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880076E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1602.2033333333345, "minX": 1.72880076E12, "maxY": 1602.2033333333345, "series": [{"data": [[1.72880076E12, 1602.2033333333345]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880076E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1284.9733333333334, "minX": 1.72880076E12, "maxY": 1284.9733333333334, "series": [{"data": [[1.72880076E12, 1284.9733333333334]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880076E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 110.0, "minX": 1.72880076E12, "maxY": 5522.0, "series": [{"data": [[1.72880076E12, 5522.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72880076E12, 110.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72880076E12, 4854.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72880076E12, 5512.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72880076E12, 449.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72880076E12, 5291.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880076E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 151.5, "minX": 7.0, "maxY": 3044.5, "series": [{"data": [[34.0, 151.5], [74.0, 3044.5], [21.0, 183.0], [42.0, 182.0], [7.0, 153.0], [122.0, 789.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 122.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 149.5, "minX": 7.0, "maxY": 3044.5, "series": [{"data": [[34.0, 149.5], [74.0, 3044.5], [21.0, 183.0], [42.0, 182.0], [7.0, 153.0], [122.0, 788.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 122.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.72880076E12, "maxY": 5.0, "series": [{"data": [[1.72880076E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880076E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.72880076E12, "maxY": 5.0, "series": [{"data": [[1.72880076E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880076E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.72880076E12, "maxY": 5.0, "series": [{"data": [[1.72880076E12, 5.0]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880076E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.72880076E12, "maxY": 5.0, "series": [{"data": [[1.72880076E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880076E12, "title": "Total Transactions Per Second"}},
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

