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
        data: {"result": {"minY": 120.0, "minX": 0.0, "maxY": 2051.0, "series": [{"data": [[0.0, 120.0], [0.1, 120.0], [0.2, 120.0], [0.3, 120.0], [0.4, 120.0], [0.5, 121.0], [0.6, 121.0], [0.7, 122.0], [0.8, 122.0], [0.9, 122.0], [1.0, 125.0], [1.1, 125.0], [1.2, 125.0], [1.3, 125.0], [1.4, 125.0], [1.5, 126.0], [1.6, 126.0], [1.7, 127.0], [1.8, 127.0], [1.9, 127.0], [2.0, 127.0], [2.1, 127.0], [2.2, 128.0], [2.3, 128.0], [2.4, 129.0], [2.5, 130.0], [2.6, 130.0], [2.7, 130.0], [2.8, 130.0], [2.9, 131.0], [3.0, 134.0], [3.1, 134.0], [3.2, 135.0], [3.3, 135.0], [3.4, 135.0], [3.5, 135.0], [3.6, 135.0], [3.7, 136.0], [3.8, 136.0], [3.9, 136.0], [4.0, 137.0], [4.1, 137.0], [4.2, 137.0], [4.3, 137.0], [4.4, 137.0], [4.5, 138.0], [4.6, 138.0], [4.7, 138.0], [4.8, 138.0], [4.9, 138.0], [5.0, 138.0], [5.1, 138.0], [5.2, 139.0], [5.3, 139.0], [5.4, 139.0], [5.5, 139.0], [5.6, 139.0], [5.7, 139.0], [5.8, 139.0], [5.9, 139.0], [6.0, 140.0], [6.1, 140.0], [6.2, 141.0], [6.3, 141.0], [6.4, 141.0], [6.5, 141.0], [6.6, 141.0], [6.7, 143.0], [6.8, 143.0], [6.9, 143.0], [7.0, 143.0], [7.1, 143.0], [7.2, 143.0], [7.3, 143.0], [7.4, 143.0], [7.5, 144.0], [7.6, 144.0], [7.7, 145.0], [7.8, 145.0], [7.9, 145.0], [8.0, 146.0], [8.1, 146.0], [8.2, 146.0], [8.3, 146.0], [8.4, 146.0], [8.5, 146.0], [8.6, 146.0], [8.7, 146.0], [8.8, 146.0], [8.9, 147.0], [9.0, 147.0], [9.1, 147.0], [9.2, 149.0], [9.3, 149.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 150.0], [9.8, 150.0], [9.9, 150.0], [10.0, 150.0], [10.1, 150.0], [10.2, 150.0], [10.3, 150.0], [10.4, 150.0], [10.5, 150.0], [10.6, 151.0], [10.7, 151.0], [10.8, 151.0], [10.9, 152.0], [11.0, 152.0], [11.1, 152.0], [11.2, 152.0], [11.3, 152.0], [11.4, 152.0], [11.5, 152.0], [11.6, 152.0], [11.7, 153.0], [11.8, 153.0], [11.9, 154.0], [12.0, 154.0], [12.1, 154.0], [12.2, 154.0], [12.3, 154.0], [12.4, 154.0], [12.5, 154.0], [12.6, 154.0], [12.7, 154.0], [12.8, 154.0], [12.9, 154.0], [13.0, 154.0], [13.1, 154.0], [13.2, 155.0], [13.3, 155.0], [13.4, 155.0], [13.5, 155.0], [13.6, 155.0], [13.7, 156.0], [13.8, 156.0], [13.9, 156.0], [14.0, 156.0], [14.1, 157.0], [14.2, 157.0], [14.3, 157.0], [14.4, 157.0], [14.5, 157.0], [14.6, 157.0], [14.7, 159.0], [14.8, 159.0], [14.9, 159.0], [15.0, 159.0], [15.1, 159.0], [15.2, 159.0], [15.3, 159.0], [15.4, 160.0], [15.5, 160.0], [15.6, 160.0], [15.7, 160.0], [15.8, 160.0], [15.9, 160.0], [16.0, 160.0], [16.1, 161.0], [16.2, 161.0], [16.3, 161.0], [16.4, 161.0], [16.5, 161.0], [16.6, 161.0], [16.7, 162.0], [16.8, 162.0], [16.9, 162.0], [17.0, 162.0], [17.1, 164.0], [17.2, 164.0], [17.3, 164.0], [17.4, 165.0], [17.5, 165.0], [17.6, 165.0], [17.7, 166.0], [17.8, 166.0], [17.9, 166.0], [18.0, 166.0], [18.1, 166.0], [18.2, 166.0], [18.3, 166.0], [18.4, 167.0], [18.5, 167.0], [18.6, 168.0], [18.7, 168.0], [18.8, 168.0], [18.9, 169.0], [19.0, 169.0], [19.1, 169.0], [19.2, 169.0], [19.3, 169.0], [19.4, 169.0], [19.5, 169.0], [19.6, 170.0], [19.7, 170.0], [19.8, 170.0], [19.9, 171.0], [20.0, 171.0], [20.1, 171.0], [20.2, 171.0], [20.3, 171.0], [20.4, 172.0], [20.5, 172.0], [20.6, 172.0], [20.7, 173.0], [20.8, 173.0], [20.9, 173.0], [21.0, 174.0], [21.1, 174.0], [21.2, 175.0], [21.3, 175.0], [21.4, 175.0], [21.5, 175.0], [21.6, 175.0], [21.7, 175.0], [21.8, 175.0], [21.9, 176.0], [22.0, 176.0], [22.1, 176.0], [22.2, 176.0], [22.3, 176.0], [22.4, 177.0], [22.5, 177.0], [22.6, 177.0], [22.7, 178.0], [22.8, 178.0], [22.9, 178.0], [23.0, 178.0], [23.1, 178.0], [23.2, 178.0], [23.3, 178.0], [23.4, 180.0], [23.5, 180.0], [23.6, 180.0], [23.7, 180.0], [23.8, 180.0], [23.9, 181.0], [24.0, 181.0], [24.1, 181.0], [24.2, 183.0], [24.3, 183.0], [24.4, 183.0], [24.5, 183.0], [24.6, 183.0], [24.7, 183.0], [24.8, 183.0], [24.9, 184.0], [25.0, 184.0], [25.1, 184.0], [25.2, 184.0], [25.3, 184.0], [25.4, 185.0], [25.5, 185.0], [25.6, 186.0], [25.7, 186.0], [25.8, 186.0], [25.9, 187.0], [26.0, 187.0], [26.1, 187.0], [26.2, 187.0], [26.3, 187.0], [26.4, 188.0], [26.5, 188.0], [26.6, 188.0], [26.7, 188.0], [26.8, 188.0], [26.9, 188.0], [27.0, 188.0], [27.1, 188.0], [27.2, 188.0], [27.3, 188.0], [27.4, 190.0], [27.5, 190.0], [27.6, 190.0], [27.7, 190.0], [27.8, 190.0], [27.9, 190.0], [28.0, 190.0], [28.1, 190.0], [28.2, 191.0], [28.3, 191.0], [28.4, 191.0], [28.5, 191.0], [28.6, 191.0], [28.7, 191.0], [28.8, 191.0], [28.9, 191.0], [29.0, 191.0], [29.1, 191.0], [29.2, 192.0], [29.3, 192.0], [29.4, 192.0], [29.5, 192.0], [29.6, 192.0], [29.7, 193.0], [29.8, 193.0], [29.9, 193.0], [30.0, 194.0], [30.1, 194.0], [30.2, 194.0], [30.3, 194.0], [30.4, 194.0], [30.5, 195.0], [30.6, 195.0], [30.7, 195.0], [30.8, 195.0], [30.9, 196.0], [31.0, 196.0], [31.1, 196.0], [31.2, 197.0], [31.3, 197.0], [31.4, 199.0], [31.5, 199.0], [31.6, 199.0], [31.7, 199.0], [31.8, 199.0], [31.9, 199.0], [32.0, 199.0], [32.1, 199.0], [32.2, 199.0], [32.3, 199.0], [32.4, 199.0], [32.5, 199.0], [32.6, 199.0], [32.7, 200.0], [32.8, 200.0], [32.9, 200.0], [33.0, 200.0], [33.1, 200.0], [33.2, 200.0], [33.3, 200.0], [33.4, 200.0], [33.5, 201.0], [33.6, 201.0], [33.7, 201.0], [33.8, 201.0], [33.9, 201.0], [34.0, 201.0], [34.1, 201.0], [34.2, 201.0], [34.3, 201.0], [34.4, 202.0], [34.5, 202.0], [34.6, 202.0], [34.7, 203.0], [34.8, 203.0], [34.9, 203.0], [35.0, 203.0], [35.1, 203.0], [35.2, 203.0], [35.3, 203.0], [35.4, 203.0], [35.5, 203.0], [35.6, 204.0], [35.7, 204.0], [35.8, 204.0], [35.9, 204.0], [36.0, 204.0], [36.1, 205.0], [36.2, 205.0], [36.3, 205.0], [36.4, 205.0], [36.5, 205.0], [36.6, 206.0], [36.7, 206.0], [36.8, 206.0], [36.9, 207.0], [37.0, 207.0], [37.1, 207.0], [37.2, 207.0], [37.3, 207.0], [37.4, 210.0], [37.5, 210.0], [37.6, 210.0], [37.7, 211.0], [37.8, 211.0], [37.9, 212.0], [38.0, 212.0], [38.1, 212.0], [38.2, 214.0], [38.3, 214.0], [38.4, 214.0], [38.5, 214.0], [38.6, 214.0], [38.7, 216.0], [38.8, 216.0], [38.9, 217.0], [39.0, 217.0], [39.1, 218.0], [39.2, 219.0], [39.3, 219.0], [39.4, 223.0], [39.5, 223.0], [39.6, 223.0], [39.7, 224.0], [39.8, 224.0], [39.9, 224.0], [40.0, 224.0], [40.1, 224.0], [40.2, 224.0], [40.3, 224.0], [40.4, 225.0], [40.5, 225.0], [40.6, 225.0], [40.7, 226.0], [40.8, 226.0], [40.9, 227.0], [41.0, 227.0], [41.1, 227.0], [41.2, 227.0], [41.3, 227.0], [41.4, 227.0], [41.5, 227.0], [41.6, 227.0], [41.7, 228.0], [41.8, 228.0], [41.9, 228.0], [42.0, 228.0], [42.1, 229.0], [42.2, 229.0], [42.3, 229.0], [42.4, 230.0], [42.5, 230.0], [42.6, 230.0], [42.7, 231.0], [42.8, 231.0], [42.9, 231.0], [43.0, 231.0], [43.1, 231.0], [43.2, 232.0], [43.3, 232.0], [43.4, 232.0], [43.5, 232.0], [43.6, 232.0], [43.7, 233.0], [43.8, 233.0], [43.9, 235.0], [44.0, 235.0], [44.1, 235.0], [44.2, 236.0], [44.3, 236.0], [44.4, 236.0], [44.5, 236.0], [44.6, 236.0], [44.7, 237.0], [44.8, 237.0], [44.9, 237.0], [45.0, 237.0], [45.1, 238.0], [45.2, 238.0], [45.3, 238.0], [45.4, 238.0], [45.5, 238.0], [45.6, 238.0], [45.7, 239.0], [45.8, 239.0], [45.9, 239.0], [46.0, 239.0], [46.1, 241.0], [46.2, 241.0], [46.3, 241.0], [46.4, 243.0], [46.5, 243.0], [46.6, 244.0], [46.7, 244.0], [46.8, 244.0], [46.9, 244.0], [47.0, 244.0], [47.1, 244.0], [47.2, 245.0], [47.3, 245.0], [47.4, 245.0], [47.5, 245.0], [47.6, 245.0], [47.7, 245.0], [47.8, 245.0], [47.9, 246.0], [48.0, 246.0], [48.1, 247.0], [48.2, 247.0], [48.3, 247.0], [48.4, 247.0], [48.5, 247.0], [48.6, 247.0], [48.7, 248.0], [48.8, 248.0], [48.9, 248.0], [49.0, 248.0], [49.1, 248.0], [49.2, 251.0], [49.3, 251.0], [49.4, 251.0], [49.5, 251.0], [49.6, 252.0], [49.7, 252.0], [49.8, 252.0], [49.9, 252.0], [50.0, 252.0], [50.1, 252.0], [50.2, 254.0], [50.3, 254.0], [50.4, 254.0], [50.5, 254.0], [50.6, 254.0], [50.7, 254.0], [50.8, 254.0], [50.9, 255.0], [51.0, 255.0], [51.1, 255.0], [51.2, 256.0], [51.3, 256.0], [51.4, 257.0], [51.5, 257.0], [51.6, 257.0], [51.7, 258.0], [51.8, 258.0], [51.9, 259.0], [52.0, 259.0], [52.1, 259.0], [52.2, 259.0], [52.3, 259.0], [52.4, 259.0], [52.5, 259.0], [52.6, 259.0], [52.7, 259.0], [52.8, 259.0], [52.9, 260.0], [53.0, 260.0], [53.1, 260.0], [53.2, 260.0], [53.3, 260.0], [53.4, 261.0], [53.5, 261.0], [53.6, 261.0], [53.7, 262.0], [53.8, 262.0], [53.9, 262.0], [54.0, 262.0], [54.1, 263.0], [54.2, 264.0], [54.3, 264.0], [54.4, 264.0], [54.5, 264.0], [54.6, 265.0], [54.7, 266.0], [54.8, 266.0], [54.9, 269.0], [55.0, 270.0], [55.1, 270.0], [55.2, 270.0], [55.3, 270.0], [55.4, 270.0], [55.5, 272.0], [55.6, 272.0], [55.7, 273.0], [55.8, 273.0], [55.9, 273.0], [56.0, 273.0], [56.1, 273.0], [56.2, 273.0], [56.3, 273.0], [56.4, 274.0], [56.5, 275.0], [56.6, 275.0], [56.7, 277.0], [56.8, 277.0], [56.9, 281.0], [57.0, 282.0], [57.1, 282.0], [57.2, 283.0], [57.3, 283.0], [57.4, 283.0], [57.5, 283.0], [57.6, 283.0], [57.7, 283.0], [57.8, 283.0], [57.9, 284.0], [58.0, 285.0], [58.1, 285.0], [58.2, 286.0], [58.3, 286.0], [58.4, 287.0], [58.5, 288.0], [58.6, 288.0], [58.7, 288.0], [58.8, 288.0], [58.9, 289.0], [59.0, 294.0], [59.1, 294.0], [59.2, 294.0], [59.3, 294.0], [59.4, 294.0], [59.5, 298.0], [59.6, 298.0], [59.7, 300.0], [59.8, 300.0], [59.9, 301.0], [60.0, 302.0], [60.1, 302.0], [60.2, 303.0], [60.3, 303.0], [60.4, 304.0], [60.5, 305.0], [60.6, 305.0], [60.7, 306.0], [60.8, 306.0], [60.9, 307.0], [61.0, 307.0], [61.1, 307.0], [61.2, 308.0], [61.3, 308.0], [61.4, 309.0], [61.5, 309.0], [61.6, 309.0], [61.7, 309.0], [61.8, 309.0], [61.9, 311.0], [62.0, 311.0], [62.1, 311.0], [62.2, 312.0], [62.3, 312.0], [62.4, 313.0], [62.5, 317.0], [62.6, 317.0], [62.7, 318.0], [62.8, 318.0], [62.9, 318.0], [63.0, 319.0], [63.1, 319.0], [63.2, 320.0], [63.3, 320.0], [63.4, 322.0], [63.5, 324.0], [63.6, 324.0], [63.7, 324.0], [63.8, 324.0], [63.9, 325.0], [64.0, 326.0], [64.1, 326.0], [64.2, 326.0], [64.3, 326.0], [64.4, 327.0], [64.5, 328.0], [64.6, 328.0], [64.7, 330.0], [64.8, 330.0], [64.9, 330.0], [65.0, 334.0], [65.1, 334.0], [65.2, 334.0], [65.3, 334.0], [65.4, 335.0], [65.5, 337.0], [65.6, 337.0], [65.7, 338.0], [65.8, 338.0], [65.9, 338.0], [66.0, 340.0], [66.1, 340.0], [66.2, 341.0], [66.3, 341.0], [66.4, 345.0], [66.5, 347.0], [66.6, 347.0], [66.7, 348.0], [66.8, 348.0], [66.9, 348.0], [67.0, 353.0], [67.1, 353.0], [67.2, 353.0], [67.3, 353.0], [67.4, 353.0], [67.5, 355.0], [67.6, 355.0], [67.7, 357.0], [67.8, 357.0], [67.9, 358.0], [68.0, 358.0], [68.1, 358.0], [68.2, 359.0], [68.3, 359.0], [68.4, 359.0], [68.5, 361.0], [68.6, 361.0], [68.7, 366.0], [68.8, 366.0], [68.9, 367.0], [69.0, 368.0], [69.1, 368.0], [69.2, 368.0], [69.3, 368.0], [69.4, 369.0], [69.5, 372.0], [69.6, 372.0], [69.7, 373.0], [69.8, 373.0], [69.9, 374.0], [70.0, 379.0], [70.1, 379.0], [70.2, 384.0], [70.3, 384.0], [70.4, 384.0], [70.5, 385.0], [70.6, 385.0], [70.7, 388.0], [70.8, 388.0], [70.9, 392.0], [71.0, 396.0], [71.1, 396.0], [71.2, 397.0], [71.3, 397.0], [71.4, 398.0], [71.5, 398.0], [71.6, 398.0], [71.7, 401.0], [71.8, 401.0], [71.9, 408.0], [72.0, 408.0], [72.1, 411.0], [72.2, 412.0], [72.3, 412.0], [72.4, 413.0], [72.5, 413.0], [72.6, 414.0], [72.7, 419.0], [72.8, 419.0], [72.9, 419.0], [73.0, 419.0], [73.1, 422.0], [73.2, 423.0], [73.3, 423.0], [73.4, 425.0], [73.5, 425.0], [73.6, 426.0], [73.7, 433.0], [73.8, 433.0], [73.9, 438.0], [74.0, 438.0], [74.1, 445.0], [74.2, 450.0], [74.3, 450.0], [74.4, 454.0], [74.5, 454.0], [74.6, 458.0], [74.7, 458.0], [74.8, 458.0], [74.9, 458.0], [75.0, 458.0], [75.1, 462.0], [75.2, 463.0], [75.3, 463.0], [75.4, 466.0], [75.5, 466.0], [75.6, 467.0], [75.7, 471.0], [75.8, 471.0], [75.9, 471.0], [76.0, 471.0], [76.1, 476.0], [76.2, 481.0], [76.3, 481.0], [76.4, 483.0], [76.5, 483.0], [76.6, 488.0], [76.7, 490.0], [76.8, 490.0], [76.9, 492.0], [77.0, 492.0], [77.1, 493.0], [77.2, 495.0], [77.3, 495.0], [77.4, 495.0], [77.5, 495.0], [77.6, 497.0], [77.7, 497.0], [77.8, 497.0], [77.9, 498.0], [78.0, 498.0], [78.1, 499.0], [78.2, 501.0], [78.3, 501.0], [78.4, 501.0], [78.5, 501.0], [78.6, 510.0], [78.7, 521.0], [78.8, 521.0], [78.9, 525.0], [79.0, 525.0], [79.1, 538.0], [79.2, 546.0], [79.3, 546.0], [79.4, 548.0], [79.5, 548.0], [79.6, 552.0], [79.7, 554.0], [79.8, 554.0], [79.9, 557.0], [80.0, 557.0], [80.1, 558.0], [80.2, 559.0], [80.3, 559.0], [80.4, 569.0], [80.5, 569.0], [80.6, 572.0], [80.7, 591.0], [80.8, 591.0], [80.9, 596.0], [81.0, 596.0], [81.1, 606.0], [81.2, 615.0], [81.3, 615.0], [81.4, 632.0], [81.5, 632.0], [81.6, 633.0], [81.7, 634.0], [81.8, 634.0], [81.9, 659.0], [82.0, 659.0], [82.1, 665.0], [82.2, 668.0], [82.3, 668.0], [82.4, 681.0], [82.5, 681.0], [82.6, 697.0], [82.7, 699.0], [82.8, 699.0], [82.9, 723.0], [83.0, 723.0], [83.1, 727.0], [83.2, 741.0], [83.3, 741.0], [83.4, 755.0], [83.5, 755.0], [83.6, 790.0], [83.7, 791.0], [83.8, 791.0], [83.9, 802.0], [84.0, 802.0], [84.1, 942.0], [84.2, 960.0], [84.3, 960.0], [84.4, 970.0], [84.5, 970.0], [84.6, 978.0], [84.7, 980.0], [84.8, 980.0], [84.9, 994.0], [85.0, 994.0], [85.1, 1043.0], [85.2, 1048.0], [85.3, 1048.0], [85.4, 1050.0], [85.5, 1050.0], [85.6, 1058.0], [85.7, 1060.0], [85.8, 1060.0], [85.9, 1067.0], [86.0, 1067.0], [86.1, 1075.0], [86.2, 1078.0], [86.3, 1078.0], [86.4, 1089.0], [86.5, 1089.0], [86.6, 1092.0], [86.7, 1094.0], [86.8, 1094.0], [86.9, 1097.0], [87.0, 1097.0], [87.1, 1099.0], [87.2, 1103.0], [87.3, 1103.0], [87.4, 1105.0], [87.5, 1105.0], [87.6, 1157.0], [87.7, 1162.0], [87.8, 1162.0], [87.9, 1163.0], [88.0, 1163.0], [88.1, 1164.0], [88.2, 1165.0], [88.3, 1165.0], [88.4, 1175.0], [88.5, 1175.0], [88.6, 1176.0], [88.7, 1178.0], [88.8, 1178.0], [88.9, 1189.0], [89.0, 1189.0], [89.1, 1190.0], [89.2, 1198.0], [89.3, 1198.0], [89.4, 1202.0], [89.5, 1202.0], [89.6, 1319.0], [89.7, 1432.0], [89.8, 1432.0], [89.9, 1445.0], [90.0, 1445.0], [90.1, 1449.0], [90.2, 1456.0], [90.3, 1456.0], [90.4, 1473.0], [90.5, 1473.0], [90.6, 1532.0], [90.7, 1564.0], [90.8, 1564.0], [90.9, 1567.0], [91.0, 1567.0], [91.1, 1572.0], [91.2, 1595.0], [91.3, 1595.0], [91.4, 1600.0], [91.5, 1600.0], [91.6, 1618.0], [91.7, 1627.0], [91.8, 1627.0], [91.9, 1628.0], [92.0, 1628.0], [92.1, 1637.0], [92.2, 1646.0], [92.3, 1646.0], [92.4, 1648.0], [92.5, 1648.0], [92.6, 1689.0], [92.7, 1706.0], [92.8, 1706.0], [92.9, 1721.0], [93.0, 1721.0], [93.1, 1738.0], [93.2, 1740.0], [93.3, 1740.0], [93.4, 1743.0], [93.5, 1743.0], [93.6, 1808.0], [93.7, 1814.0], [93.8, 1814.0], [93.9, 1835.0], [94.0, 1835.0], [94.1, 1835.0], [94.2, 1840.0], [94.3, 1840.0], [94.4, 1846.0], [94.5, 1846.0], [94.6, 1862.0], [94.7, 1886.0], [94.8, 1886.0], [94.9, 1886.0], [95.0, 1886.0], [95.1, 1892.0], [95.2, 1894.0], [95.3, 1894.0], [95.4, 1912.0], [95.5, 1912.0], [95.6, 1926.0], [95.7, 1930.0], [95.8, 1930.0], [95.9, 1947.0], [96.0, 1947.0], [96.1, 1956.0], [96.2, 1965.0], [96.3, 1965.0], [96.4, 1970.0], [96.5, 1970.0], [96.6, 1973.0], [96.7, 1974.0], [96.8, 1974.0], [96.9, 1974.0], [97.0, 1974.0], [97.1, 1979.0], [97.2, 2006.0], [97.3, 2006.0], [97.4, 2024.0], [97.5, 2024.0], [97.6, 2032.0], [97.7, 2032.0], [97.8, 2032.0], [97.9, 2034.0], [98.0, 2034.0], [98.1, 2034.0], [98.2, 2035.0], [98.3, 2035.0], [98.4, 2035.0], [98.5, 2035.0], [98.6, 2035.0], [98.7, 2036.0], [98.8, 2036.0], [98.9, 2036.0], [99.0, 2036.0], [99.1, 2041.0], [99.2, 2041.0], [99.3, 2041.0], [99.4, 2042.0], [99.5, 2042.0], [99.6, 2043.0], [99.7, 2044.0], [99.8, 2044.0], [99.9, 2051.0], [100.0, 2051.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 196.0, "series": [{"data": [[600.0, 11.0], [700.0, 6.0], [200.0, 162.0], [800.0, 1.0], [900.0, 6.0], [1000.0, 13.0], [1100.0, 13.0], [300.0, 72.0], [1200.0, 1.0], [1300.0, 1.0], [1400.0, 5.0], [1500.0, 5.0], [100.0, 196.0], [1600.0, 8.0], [400.0, 39.0], [1700.0, 5.0], [1800.0, 11.0], [1900.0, 11.0], [2000.0, 17.0], [500.0, 17.0]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 57.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 469.0, "series": [{"data": [[0.0, 469.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 74.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 57.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 33.796666666666646, "minX": 1.72880178E12, "maxY": 33.796666666666646, "series": [{"data": [[1.72880178E12, 33.796666666666646]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880178E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 136.0, "minX": 3.0, "maxY": 2003.0, "series": [{"data": [[3.0, 245.66666666666666], [4.0, 208.0], [5.0, 193.5], [6.0, 166.0], [7.0, 183.0], [8.0, 142.4], [9.0, 169.60975609756102], [10.0, 169.37037037037035], [11.0, 179.80769230769235], [12.0, 251.8125], [13.0, 222.6875], [14.0, 266.9166666666667], [15.0, 310.64285714285717], [16.0, 221.83333333333334], [17.0, 338.5], [18.0, 253.66666666666666], [19.0, 198.71428571428572], [20.0, 280.9], [21.0, 282.72727272727275], [22.0, 774.8], [23.0, 368.69230769230774], [24.0, 246.00000000000003], [25.0, 587.6923076923077], [26.0, 328.8571428571429], [27.0, 905.7894736842105], [28.0, 382.57142857142856], [29.0, 397.8181818181818], [30.0, 340.0], [31.0, 487.0], [33.0, 770.8181818181818], [32.0, 327.0], [35.0, 551.4285714285714], [34.0, 476.0], [37.0, 900.1428571428571], [36.0, 403.85714285714283], [38.0, 582.8571428571429], [39.0, 331.25], [41.0, 1080.3], [40.0, 374.25], [43.0, 365.4], [42.0, 337.6666666666667], [45.0, 521.24], [44.0, 453.5], [47.0, 570.6], [46.0, 251.33333333333334], [49.0, 758.875], [48.0, 367.6666666666667], [50.0, 596.25], [51.0, 318.5], [53.0, 1738.0], [52.0, 1088.75], [55.0, 2003.0], [54.0, 384.6666666666667], [57.0, 862.4], [56.0, 265.0], [59.0, 232.0], [58.0, 247.0], [61.0, 926.2857142857142], [63.0, 274.0], [62.0, 295.0], [66.0, 1273.5], [64.0, 807.3333333333333], [67.0, 259.5], [71.0, 353.0], [70.0, 368.0], [73.0, 1586.0], [72.0, 136.0], [78.0, 888.6666666666666], [76.0, 1165.6666666666665], [82.0, 978.0], [81.0, 1760.0], [86.0, 1646.0], [85.0, 1019.0], [84.0, 716.0], [90.0, 1975.3333333333333], [88.0, 1835.0], [95.0, 1886.0], [94.0, 1545.0], [93.0, 1886.0], [99.0, 283.0], [98.0, 289.0], [97.0, 1956.0], [96.0, 1099.0], [103.0, 660.0], [101.0, 271.0], [106.0, 1048.0], [105.0, 259.0], [104.0, 258.0], [114.0, 247.0], [112.0, 933.8], [119.0, 674.9285714285714], [117.0, 244.0]], "isOverall": false, "label": "reqres api", "isController": false}, {"data": [[33.796666666666646, 476.4733333333334]], "isOverall": false, "label": "reqres api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 119.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1230.0, "minX": 1.72880178E12, "maxY": 19370.0, "series": [{"data": [[1.72880178E12, 19370.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72880178E12, 1230.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880178E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 476.4733333333334, "minX": 1.72880178E12, "maxY": 476.4733333333334, "series": [{"data": [[1.72880178E12, 476.4733333333334]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880178E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 422.52166666666676, "minX": 1.72880178E12, "maxY": 422.52166666666676, "series": [{"data": [[1.72880178E12, 422.52166666666676]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880178E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 318.32333333333304, "minX": 1.72880178E12, "maxY": 318.32333333333304, "series": [{"data": [[1.72880178E12, 318.32333333333304]], "isOverall": false, "label": "reqres api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880178E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 120.0, "minX": 1.72880178E12, "maxY": 2051.0, "series": [{"data": [[1.72880178E12, 2051.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72880178E12, 120.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72880178E12, 1448.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72880178E12, 2040.95]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72880178E12, 252.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72880178E12, 1891.6999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880178E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 154.0, "minX": 4.0, "maxY": 1096.5, "series": [{"data": [[4.0, 241.5], [75.0, 156.0], [38.0, 257.0], [80.0, 1096.5], [44.0, 244.5], [47.0, 374.0], [98.0, 265.5], [107.0, 309.0], [52.0, 356.0], [55.0, 154.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 152.0, "minX": 4.0, "maxY": 839.0, "series": [{"data": [[4.0, 241.0], [75.0, 155.0], [38.0, 253.5], [80.0, 839.0], [44.0, 244.5], [47.0, 373.0], [98.0, 265.5], [107.0, 308.0], [52.0, 344.5], [55.0, 152.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 107.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72880178E12, "maxY": 10.0, "series": [{"data": [[1.72880178E12, 10.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880178E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72880178E12, "maxY": 10.0, "series": [{"data": [[1.72880178E12, 10.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72880178E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72880178E12, "maxY": 10.0, "series": [{"data": [[1.72880178E12, 10.0]], "isOverall": false, "label": "reqres api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880178E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.72880178E12, "maxY": 10.0, "series": [{"data": [[1.72880178E12, 10.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72880178E12, "title": "Total Transactions Per Second"}},
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

