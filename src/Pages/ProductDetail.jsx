import { FaArrowLeftLong } from 'react-icons/fa6';
import { CheckCircle, Info, Star } from "lucide-react"; // modern Lucide icons
import { useParams, useNavigate } from 'react-router-dom';
import towerparking from '../assets/Parking System Photos/Parking System Photos/Tower Parking System/tower-parking.jpeg';
import twopolestack from '../assets/Parking System Photos/Parking System Photos/2 pole Stack Parking System/2 Pole Stack.jpg';
import fourpole from '../assets/Parking System Photos/Parking System Photos/4 Pole - 2 Level Stack Parking System/4pole.png';
import horizontal from '../assets/Parking System Photos/Parking System Photos/Horizontal Box Parking System/horizontalbox.jpg';
import hydraulicpitpuzzle from '../assets/Parking System Photos/Parking System Photos/Hydraulic (Pit Puzzle) Parking System/pit-puzzle.jpg';
import hydraulic3lstack from '../assets/Parking System Photos/Parking System Photos/Hydraulic 3L Stack Parking System/hydraulic-3l-stack.webp';
import hydraulicpitstackdependent from '../assets/Parking System Photos/Parking System Photos/Hydraulic Pit Stack Parking System – Dependent/hydraulic-pit-stack-dependent.webp';
import hydraulicpitstackindependent from '../assets/Parking System Photos/Parking System Photos/Hydraulic Pit Stack Parking System – Independent/hydraulic-pit-stack-independent.avif';
import overgroundpuzzle from '../assets/Parking System Photos/Parking System Photos/Overground Puzzle – Electromechanical (OGP)/overground-puzzle.png';
import rotaryparking from '../assets/Parking System Photos/Parking System Photos/Rotary Parking System/rotary-parking.png';
import shuttlecart from '../assets/Parking System Photos/Parking System Photos/Shuttle Cart Parking System/shuttle-cart.png';
import { use, useEffect } from 'react';

// Placeholder product data. In a real application, this data would likely come from an API.
const products = [
  {
    id: 1,
    name: '2 Pole Hydraulic Stack Parking System',
    tagline: 'Simple, Efficient Lift-Type Parking for Bungalows',
    about: 'The 2 Pole Hydraulic Stack Parking System is a simple yet highly efficient lift-type parking equipment designed to maximize space utilization while providing unmatched convenience. It is an ideal solution for bungalows, small residential complexes, and apartment owners who require a compact, user-friendly, and cost-effective parking option. Built with a robust hydraulic mechanism, this system ensures smooth lifting and lowering of vehicles with minimal noise and vibration. Its straightforward design makes it easy to operate, maintain, and install, while its low power consumption ensures energy efficiency and long-term savings. Engineered with a strong steel structure and anti-corrosion protection, the system offers reliable performance, durability, and enhanced safety features such as mechanical locks and sensors to secure vehicles at all times. With its reasonable structure, simple layout, and dependable performance, the 2 Pole Hydraulic Stack is the perfect balance of functionality, affordability, and long-lasting value.',
    image: twopolestack,
    generalSpecifications: [
      { key: 'System Length', value: '5000 mm' },
      { key: 'System Width', value: '2250 mm – 2650 mm' },
      { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
      { key: 'Clear Platform Height (Upper Car)', value: '1500 mm – 1800 mm' },
      { key: 'Lifting Capacity / Car Weight', value: 'Up to 2000 – 2500 kg' },
      { key: 'Operation', value: 'Hydraulic' },
      { key: 'Power Requirement', value: '2.2 kW – 3.0 kW, 3-phase' },
      { key: 'Finishing', value: 'Powder-coated steel with anti-corrosion treatment' },
      { key: 'Safety Features', value: ['Mechanical locking system', 'Overload protection', 'Emergency stop switch'] },
      { key: 'Suitable For', value: 'Sedans, SUVs, and compact cars' }
    ],
    keyBenefits: [
      'Space Optimization: Maximizes space utilization, ideal for small residential areas.',
      'User-Friendly: Simple and straightforward design is easy to operate and maintain.',
      'Cost-Effective: An affordable solution with low power consumption and minimal civil work.',
      'Reliable Performance: Robust hydraulic mechanism ensures smooth lifting and lowering with minimal noise.',
      'Enhanced Safety: Features like mechanical locks and sensors provide enhanced security for vehicles.',
      'Durable Construction: Strong steel structure with anti-corrosion treatment for long-term value.'
    ],
  },
  {
  id: 2,
  name: '4 Pole – 2 Level Stack Parking System',
  tagline: 'Robust and Versatile Space-Saving Solution',
  about: 'The 4 Pole – 2 Level Stack Parking System is a robust and versatile solution designed to address the growing challenge of limited parking space in urban environments. By utilizing both mechanical and hydraulic technology, this system effectively doubles parking capacity within the same footprint, making it an ideal choice for residential societies, commercial complexes, office buildings, and public parking facilities. Built on a strong 4-pillar structure, the system offers enhanced stability and safety, allowing vehicles to be stacked securely on two levels without compromising convenience. The design takes full advantage of aisle space, ensuring maximum efficiency in land usage while providing easy accessibility for drivers. Its hydraulic lifting mechanism ensures smooth and reliable operation, while the mechanical safety locks and sensors guarantee secure parking at all times. With low power consumption, minimal maintenance requirements, and a durable structure treated with anti-corrosion coating, this system delivers long-term value and peace of mind. The 4 Pole – 2 Level Stack Parking System is the perfect blend of strength, efficiency, and convenience, enabling owners and developers to optimize parking capacity without heavy construction costs.',
  image: fourpole,
  generalSpecifications: [
    { key: 'System Length', value: '5000 mm' },
    { key: 'System Width', value: '2250 mm – 2650 mm' },
    { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
    { key: 'Clear Platform Height (Upper Car)', value: '1600 mm – 1800 mm' },
    { key: 'Lifting Capacity / Car Weight', value: 'Up to 2000 – 2500 kg' },
    { key: 'Operation', value: 'Hydraulic with mechanical locking system' },
    { key: 'Power Requirement', value: '2.2 kW – 3.0 kW, 3-phase' },
    { key: 'Structure', value: 'Heavy-duty steel with powder-coated finish & anti-rust treatment' },
    { key: 'Safety Features', value: [
      'Mechanical locks at multiple points',
      'Overload protection system',
      'Emergency stop button',
      'Safety sensors to prevent accidents'
    ] },
    { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, and light utility vehicles' }
  ],
  keyBenefits: [
    'Space Optimization: Doubles parking capacity within the same footprint.',
    'Enhanced Stability: A strong 4-pillar structure provides enhanced stability and safety.',
    'Maximum Efficiency: Takes full advantage of aisle space for optimal land utilization.',
    'Smooth & Reliable Operation: The hydraulic lifting mechanism ensures quiet and consistent performance.',
    'Cost-Effective: Doubles parking capacity without heavy civil construction.',
    'Long-Term Durability: Heavy-duty steel with anti-corrosion coating ensures a long service life.',
  ],
  },
  {
    id: 3,
    name: 'Hydraulic Pit Stack Parking System – Dependent',
    tagline: 'A Highly Efficient Solution for Urban Spaces',
    about: 'The Hydraulic Pit Stack Parking System is a highly efficient and space-saving solution designed for projects where vertical height is limited but basement or pit space is available. Unlike conventional stack parking that requires additional headroom, this system allows cars to be parked in a pit, making the upper level flush with the ground. It is classified as a dependent system, meaning the lower car must be removed to access the upper car, making it ideal for residential apartments, bungalows, private villas, and small commercial projects where parking demand is moderate but space utilization is critical. This system is particularly useful when initial height planning has been missed, yet maximum parking capacity is still required. Built with a hydraulic lifting mechanism, it ensures smooth operation with low noise, minimal vibration, and energy efficiency. Its sturdy structure is designed with added safety measures including anti-fall devices, overload protection, and mechanical locks, ensuring complete security of vehicles. With a compact design, easy maintenance, and corrosion-resistant finish, the Hydraulic Pit Stack Parking System offers the perfect balance between practicality, safety, and cost-effectiveness for modern urban needs.',
    image: hydraulicpitstackdependent,
    generalSpecifications: [
      { key: 'System Length', value: '5000 mm' },
      { key: 'System Width', value: '2350 mm – 2850 mm' },
      { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
      { key: 'Clear Platform Height (Upper Car)', value: '1500 mm – 1800 mm' },
      { key: 'Pit Depth Required', value: '2000 mm – 2300 mm (depending on vehicle type)' },
      { key: 'Lifting Capacity / Car Weight', value: 'Up to 2000 – 2500 kg' },
      { key: 'Operation', value: 'Hydraulic' },
      { key: 'Power Requirement', value: '2.2 kW – 3.0 kW, 3-phase' },
      { key: 'Structure', value: 'Heavy-duty steel with powder-coated finish and anti-rust treatment' },
      { key: 'Safety Features', value: [
        'Mechanical locking system',
        'Anti-fall device for added security',
        'Overload protection system',
        'Emergency stop button',
        'Safety sensors to detect obstructions'
      ] },
      { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, and light vehicles' }
    ],
    keyBenefits: [
      'Mechanical locking system for enhanced safety',
      'Anti-fall device for added security',
      'Overload protection system to prevent accidents',
      'Emergency stop button for immediate halting of operations',
    ],
  },
  {
    id: 4,
    name: 'Hydraulic Pit Stack Parking System – Independent',
    tagline: 'Advanced Independent Parking for Premium Spaces',
    about: 'The Hydraulic Pit Stack Parking System (Independent Type) is an advanced parking solution designed to maximize available space without the limitations of conventional stackers. Unlike the dependent type, this system allows vehicles to be parked and retrieved independently, eliminating the need to move one car to access another. It is the perfect choice for premium residential complexes, commercial buildings, office spaces, and high-end villas where convenience and efficiency are key requirements. This system utilizes a pit to create additional parking space without increasing the height of the structure, making the upper platform level with the ground. Vehicles on both levels can be accessed at any time, ensuring a hassle-free parking experience. Powered by a reliable hydraulic mechanism, the system ensures smooth lifting and lowering, low power consumption, and minimal maintenance. Its strong, powder-coated steel structure with advanced anti-corrosion treatment guarantees long-term durability, while built-in safety features such as mechanical locks, anti-fall devices, and overload protection offer complete security. The Independent Pit Stack Parking System is a modern, user-friendly, and future-ready solution to meet the demands of today’s urban parking challenges.',
    image: hydraulicpitstackindependent,
    generalSpecifications: [
      { key: 'System Length', value: '5000 mm' },
      { key: 'System Width', value: '2350 mm – 2850 mm' },
      { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
      { key: 'Clear Platform Height (Upper Car)', value: 'Flush with ground level (pit system)' },
      { key: 'Pit Depth Required', value: '2000 mm – 2300 mm (depending on vehicle type)' },
      { key: 'Lifting Capacity / Car Weight', value: 'Up to 2000 – 2500 kg' },
      { key: 'Operation', value: 'Hydraulic with independent car access system' },
      { key: 'Power Requirement', value: '2.2 kW – 3.0 kW, 3-phase' },
      { key: 'Structure', value: 'Heavy-duty steel, powder-coated, anti-rust & corrosion resistant' },
      { key: 'Safety Features', value: [
        'Independent operation for both levels',
      'Mechanical locking system',
      'Anti-fall safety device',
      'Overload protection system',
      'Emergency stop function',
      'Obstruction detection sensors'
    ] },
    { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, luxury cars, and light utility vehicles' }
  ],
  keyBenefits: [],
},
{
  id: 5,
  name: 'Hydraulic 3L Stack Parking System',
  tagline: 'Three-Level Parking for Maximum Efficiency',
  about: 'The Hydraulic 3-Level Stack Parking System is a revolutionary innovation in space optimization, designed to provide three times the parking capacity within a compact footprint. With its smart hydraulic lifting technology and carefully engineered structure, this system combines high efficiency, reliability, and user convenience. Unlike conventional multi-level systems that require heavy architectural modifications, the 3L Stack Parking System is designed with minimal architectural requirements, making it highly adaptable for residential complexes, commercial projects, and high-density urban areas. This system offers semi-independent operation, meaning vehicles can be parked or retrieved with minimal dependency, ensuring smoother traffic flow and reduced waiting time. Built from heavy-duty steel with advanced corrosion-resistant treatment, it ensures durability and long service life. Its intelligent design allows safe handling of sedans, SUVs, and other passenger vehicles, while integrated safety features like anti-fall locks, overload protection, and obstruction sensors provide maximum security. By offering the highest parking efficiency in its category, the Hydraulic 3L Stack Parking System is the ultimate solution for developers, property managers, and private owners looking to maximize parking space without compromising safety, convenience, or aesthetics.',
  image: hydraulic3lstack,
  generalSpecifications: [
    { key: 'System Length', value: '5000 mm' },
    { key: 'System Width', value: '2350 mm – 2850 mm' },
    { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
    { key: 'Clear Platform Height (Per Level)', value: '1600 mm – 1800 mm' },
    { key: 'Pit Depth Required', value: '2000 mm – 2300 mm' },
    { key: 'Total Pit Height', value: '2000 mm – 2300 mm' },
    { key: 'Total Pit Length', value: '5000 mm (same as system length)' },
    { key: 'Shaft Height (Above Ground Level)', value: '3500 mm – 4200 mm+ (for upper car clearance)' },
    { key: 'Lifting Capacity / Car Weight', value: 'Up to 2000 – 2500 kg per car' },
    { key: 'Operation', value: 'Hydraulic lifting system' },
    { key: 'Power Requirement', value: '2.2 kW – 3.0 kW, 3-phase' },
    { key: 'Structure', value: 'Heavy-duty steel with powder-coated finish and anti-corrosion protection' },
    { key: 'Safety Features', value: [
      'Semi-independent car access',
      'Mechanical and hydraulic locking systems',
      'Anti-fall safety device',
      'Overload protection system',
      'Emergency stop button',
      'Obstruction detection sensors',
    ] },
    { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, luxury vehicles' }
  ],
  keyBenefits: [
    'Revolutionary Innovation: Provides three times the parking capacity within a compact footprint.',
    'Semi-Independent Operation: Ensures smoother traffic flow and reduced waiting time.',
    'High Adaptability: Designed with minimal architectural requirements for easy integration.',
    'Durability & Long Service Life: Built from heavy-duty steel with advanced corrosion-resistant treatment.',
    'Maximum Security: Integrated safety features like anti-fall locks, overload protection, and obstruction sensors.',
    'Highest Parking Efficiency: The ultimate solution for maximizing space without compromising safety, convenience, or aesthetics.',
  ],
},
{
id: 6,
name: 'Overground Puzzle – Electromechanical (OGP)',
tagline: 'An Intelligent Puzzle for Parking Efficiency',
about: 'The Overground Puzzle Parking System (OGP) is a fully automated electromechanical solution designed to maximize parking capacity in limited urban spaces. By using an intelligent combination of horizontal and vertical pallet movements, the system operates just like a puzzle—allowing cars to be parked and retrieved efficiently without the need for wide driveways or ramps. Vehicles on the top level are lifted vertically, those on the middle level can be lifted or slid, and the bottom-level pallets slide horizontally, ensuring seamless vehicle access and optimal land utilization. This system is available in two major variants based on lifting mechanisms: the chain type and the steel wire rope type, both engineered for high durability, smooth operation, and low maintenance. Designed with advanced automation controls and sensors, the OGP ensures safe, reliable, and user-friendly operation with minimal manual intervention. Its modular design allows customization based on site dimensions, making it suitable for residential complexes, office buildings, commercial malls, and high-traffic urban parking zones. By combining efficiency, automation, and safety, the Overground Puzzle Parking System stands as one of the most effective solutions for modern cities facing parking space shortages.',
image: overgroundpuzzle,
generalSpecifications: [
  { key: 'System Length', value: '6500 mm' },
  { key: 'System Width', value: '2400 mm per grid' },
  { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
  { key: 'Car Weight Capacity', value: 'Up to 2000 – 2500 kg per car' },
  { key: 'Car Height Capacity', value: [
    'Lower level: 1550 mm – 1750 mm',
    'Middle level: 1600 mm – 1800 mm',
    'Upper level: 1800 mm – 2000 mm',
  ] },
  { key: 'Operation', value: 'Fully automated electromechanical with PLC control system' },
  { key: 'Drive Mechanism', value: 'Chain type / Steel wire rope type (as per requirement)' },
  { key: 'Power Requirement', value: '2.2 kW – 4.0 kW (depending on capacity & levels)' },
  { key: 'Structure', value: 'Heavy-duty steel with powder-coated, anti-rust finish' },
  { key: 'Safety Features', value: [
    'Automatic locking system',
    'Overload and obstruction sensors',
    'Emergency stop system',
    'Anti-fall safety mechanism',
    'User-friendly control interface',
  ] },
  { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, luxury cars' }
],
keyBenefits: [] // This product's benefits section is not provided in the original text, so I will leave it empty.
},
{
  id: 7,
  name: 'Hydraulic (Pit Puzzle) Parking System',
  tagline: 'The most versatile and space-efficient parking solution',
  about: 'The Hydraulic Pit Puzzle Parking System is one of the most versatile and space-efficient parking solutions, designed to deliver maximum capacity within limited land availability. Suitable for large commercial complexes, residential societies, office buildings, and standalone towers, this system utilizes a pit structure to add multiple levels of parking both underground and above ground. By combining hydraulic lifting with electromechanical sliding, the system enables both vertical and horizontal movement of pallets, allowing cars to be parked and retrieved in a seamless, automated manner—much like solving a puzzle. Its modular design offers innumerable combinations, making it adaptable to various site layouts and project requirements. Whether a developer is working on a high-density commercial site or a compact residential plot, the Pit Puzzle ensures the highest parking efficiency every single time, optimizing every inch of available space. With advanced hydraulic systems, robust steel structures, and automated safety mechanisms, the Pit Puzzle is engineered for long-term reliability, low maintenance, and smooth operation. It not only maximizes parking capacity but also enhances convenience, making it the ideal choice for future-ready smart urban parking solutions.',
  image: hydraulicpitpuzzle,
  generalSpecifications: [
    { key: 'System Length', value: '5600 mm' },
    { key: 'System Width', value: '2400 mm per grid' },
    { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
    { key: 'Car Weight Capacity', value: 'Up to 2000 – 2500 kg per car' },
    { key: 'Car Height Capacity', value: [
      'Lower Levels (Pit): 2000 mm – 2300 mm',
      'Ground/Upper Levels: 1800 mm – 2000 mm',
    ] },
    { key: 'Operation', value: 'Combination of hydraulic lift and electromechanical sliding system' },
    { key: 'Power Requirement', value: '7.5 kW – 10 kW (depending on number of levels & configuration)' },
    { key: 'Structure', value: 'Modular heavy-duty steel frame with powder-coated finish & anti-rust treatment' },
    { key: 'Drive Mechanism', value: 'Hydraulic cylinders for vertical lift + motors/chains for horizontal sliding' },
    { key: 'Safety Features', value: [
      'Anti-fall safety locks',
      'Automatic obstruction detection sensors',
      'Overload protection system',
      'Emergency stop button',
      'PLC-based intelligent control system',
    ] },
    { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, and luxury vehicles' }
  ],
  keyBenefits: [
      'Anti-Fall Safety Locks: Ensures vehicles remain securely in place during operation, preventing accidental drops.',
      'Overload Protection: Automatically detects and prevents overloading, ensuring safe operation and longevity of the system.',
      'Emergency Stop Button: Provides an immediate halt to all operations in case of emergencies, enhancing user safety.',
      'PLC-Based Intelligent Control: Offers automated, user-friendly operation with precise control over parking and retrieval processes.',
  ],
  
  },
  {
    id: 8,
    name: 'Tower Parking System',
    tagline: 'Vertical Automation for High-Density Parking',
    about: 'The Tower Parking System is a cutting-edge automated vertical parking solution designed to accommodate a large number of vehicles in the smallest possible footprint. By utilizing advanced elevator technology, the system features a centrally located lift that transports vehicles vertically and horizontally to their designated parking slots within the tower. This intelligent automation allows for fast, precise, and efficient parking and retrieval, making it an ideal choice for high-density urban areas, commercial hubs, business complexes, and premium residential developments where land availability is limited. With its high-speed elevator system, the Tower Parking System ensures rapid vehicle transfer while maintaining low noise and minimal vibration, providing a smooth and user-friendly experience. The structure is engineered from high-strength steel with anti-corrosion treatment, ensuring durability and safety even in long-term, heavy-use conditions. Equipped with advanced PLC-based controls, safety interlocks, anti-fall mechanisms, and fire protection options, this system adheres to the highest international safety standards. Designed for efficiency, sustainability, and convenience, the Tower Parking System not only optimizes parking capacity but also enhances the overall value of real estate projects, positioning itself as one of the most advanced and futuristic parking solutions available today.',
    image: towerparking,
    generalSpecifications: [
      { key: 'System Length', value: '6500 mm – 7000 mm' },
      { key: 'System Width', value: '7300 mm – 15500 mm' },
      { key: 'Pallet Width', value: '2100 mm – 2400 mm' },
      { key: 'Car Length Capacity', value: 'Up to 5000 mm – 5300 mm' },
      { key: 'Car Width Capacity', value: 'Up to 1900 mm – 2200 mm' },
      { key: 'Car Height Capacity', value: 'Up to 1550 mm – 2100 mm (customizable per slot type)' },
      { key: 'Car Weight Capacity', value: 'Up to 2000 – 2500 kg per vehicle' },
      { key: 'Operation', value: 'Fully automated, PLC-based control system with central elevator' },
      { key: 'Drive Mechanism', value: 'High-speed lift with chain/rope suspension and sliding pallet transfer' },
      { key: 'Power Requirement', value: '15 kW – 30 kW (depending on tower height & capacity)' },
      { key: 'Structure', value: 'Modular high-strength steel tower with powder-coated, anti-rust finish' },
      { key: 'Safety Features', value: ['Anti-fall safety device', 'Overload protection', 'Obstruction detection sensors', 'Fire detection and suppression system (optional)', 'Emergency stop and backup power system'] },
      { key: 'Capacity Range', value: '20 cars to 100+ cars per tower (depending on height)' },
      { key: 'Suitable For', value: 'Sedans, hatchbacks, SUVs, and luxury vehicles' }
    ],
    keyBenefits: [
      'Space Optimization: Reduces land usage by up to 90% compared to conventional parking methods.',
      'High Capacity: Extendable up to 35 parking levels with the ability to accommodate up to 6 cars per level, depending on requirements.',
      'Compact Footprint: Can be installed in the space equivalent to just 3 car slots.',
      'Flexible Construction: Available in both steel and RCC structures, customizable as per site conditions.',
      'Scalability: Suitable for residential buildings, hospitals, malls, multiplexes, office complexes, and high-density zones.',
      'Fast Installation: Significantly reduces construction and installation time compared to traditional parking structures.',
      'Vehicle Turntable (Optional): Allows automatic vehicle rotation for hassle-free entry and exit.',
      'Extended Vehicle Options: Variable level heights, customizable car dimensions, and higher weight capacity available to accommodate sedans, SUVs, and luxury vehicles.',
      'Efficiency: Quick and smooth parking & retrieval cycle with 99% uptime, ensuring reliability.',
      'Automation & Control: Fully automated operation with access via RFID tags, smart cards, or touch screen panels.',
      'Safety & Security: Advanced control systems for lift/vertical transportation, automatic vehicle transfer to storage areas, overload protection, and user safety features.'
    ]
  },
  {
    id:9,
    image: horizontal,
    name: 'Horizontal Box Parking System',
    tagline: 'Maximizing Space with Smart Horizontal Movement',
    about: 'The Horizontal Box Parking System is a smart and efficient solution that combines the vertical movement of an elevator with the horizontal movement of conveyors to maximize parking capacity in compact spaces. Vehicles are placed on pallets arranged in rows, which are moved in and out of the building through a fully automated control system. This system is particularly suitable for small to medium-sized buildings, offering a parking capacity of 20 to 40 cars within a limited footprint. Its modular and expandable design also allows for multi-level configurations, making it adaptable to diverse site conditions. With quick parking and retrieval cycles, low noise operation, and a robust electromechanical drive system, the Horizontal Box Parking System ensures convenience, safety, and efficiency. Its versatility makes it an excellent choice for residential complexes, office buildings, hotels, and small commercial properties where land use must be optimized without heavy construction requirements. By offering a balance between technology and practicality, this system provides a cost-effective and reliable alternative to conventional basements or multi-story parking structures.',
    generalSpecifications: [
      { key: 'Capacity', value: 'Range: 20 – 40 cars (expandable with multi-level design)' },
      { key: 'Operation Principle', value: 'Combination of vertical lift + horizontal conveyor pallet system' },
      { key: 'System Length & Width', value: 'Customizable based on number of rows and car dimensions' },
      { key: 'Height Requirement (4 Levels)', value: 'Height from Ground to Bottom of First Level: 0 mm, Inner Available Height: 8800 mm – 10500 mm, Total Building Height: 8200 mm – 9600 mm (approx.)' },
      { key: 'Car Length Capacity', value: 'Up to 5000 mm' },
      { key: 'Car Width Capacity', value: 'Up to 1900 mm – 2100 mm' },
      { key: 'Car Height Capacity', value: 'Up to 1800 mm – 2000 mm (customizable slot height)' },
      { key: 'Car Weight Capacity', value: 'Up to 2000 – 2500 kg per vehicle' },
      { key: 'Drive Mechanism', value: 'Electromechanical conveyor + elevator lift' },
      { key: 'Power Requirement', value: '15 kW – 25 kW (depending on capacity & levels)' },
      { key: 'Structure', value: 'Heavy-duty modular steel frame with powder-coated, anti-corrosion finish' },
      {
        key: 'Safety Features', value: [
          'PLC-based automated control system',
          'Obstruction detection sensors',
          'Anti-fall locks for lifts',
          'Overload protection',
          'Emergency stop and backup power options',
        ]
      }
    ],
    benefits: [
      'Space Optimization: Reduces land usage by up to 50% compared to conventional parking methods.',
      'High Capacity: Extendable up to 25 parking levels, adaptable to residential, commercial, and mixed-use projects.',
      'Compact Footprint: Can be installed in the space equivalent to just 3 standard car slots.',
      'Flexible Construction: Customizable in both steel and RCC structures, depending on site requirements.',
      'Scalable Applications: Ideal for residential complexes, hotels, hospitals, malls, cinema halls, and office buildings.',
      'Faster Implementation: Significantly reduces construction and installation time compared to traditional basements or multistorey parking.',
      'Customizable Dimensions: Available with variable car sizes, level heights, and extended weight capacities to suit sedans, SUVs, and luxury vehicles.',
      'Vehicle Turntable (Optional): Provides easy entry/exit orientation without the need for manual reversing.',
    ]
  },
  {
    id: 10,
    name: 'Shuttle / Cart Parking System',
    tagline: 'High-Speed Automated Parking for Modern Spaces',
    about: 'The Shuttle or Cart Parking System is an advanced pallet-based automated parking solution that combines the benefits of elevator lifting and shuttle transfer for highly efficient vehicle storage and retrieval. Unlike conventional stack or puzzle systems, this design allows vehicles to be moved vertically and horizontally at the same time, drastically reducing parking and retrieval cycles. Its modular structure makes it adaptable to both small and large-scale projects — from residential complexes to commercial hubs such as shopping malls, office towers, and airports. The system allows multiple shuttles to operate simultaneously, ensuring smooth traffic flow and eliminating waiting queues. With the ability to integrate entry/exit lifts, the Shuttle System is particularly suitable for locations where land cost is high and every square meter must be optimized for maximum parking density.',
    image: shuttlecart,
    generalSpecifications: [
      { key: 'System Length', value: '5450 mm – 5700 mm' },
      { key: 'System Width', value: '2700 mm – 3700 mm' },
      { key: 'System Height', value: '2000 mm – 6500 mm' },
      { key: 'Car Weight Capacity', value: 'Up to 2,500 kg per vehicle' },
      { key: 'Operation Mode', value: 'Automated shuttle with elevator integration' },
      { key: 'Entry/Exit Points', value: 'Customizable — front, rear, or side depending on site layout' },
    ],
    keyBenefits: [
      'Fast Operation: Vehicles are moved vertically and horizontally at the same time, cutting parking/retrieval time by nearly 50% compared to conventional systems.',
      'Flexible Layout: Can be configured to suit rectangular or irregular land plots.',
      'Scalable Capacity: Easily expandable for large-scale projects without disrupting existing operations.',
      'High User Convenience: Entry and exit lifts allow smooth traffic management and minimal driver involvement.',
      'Smart Automation: Integrated with RFID, smart card, or mobile app-based operation for a seamless user experience.',
      'Safety First: Equipped with sensors, emergency stop functions, and anti-collision technology.',
    ]
  },
    {
    id: 11,
    name: 'Rotary Parking System',
    tagline: 'A Compact, Ferris Wheel-Like Parking Solution',
    about: 'The Rotary Parking System is a compact, innovative, and highly space-efficient car parking solution designed especially for areas with limited ground space and high parking demand. Unlike large-scale tower parking, the rotary system uses a vertical chain-driven mechanism to rotate vehicles in a continuous loop, much like a Ferris wheel for cars. Each vehicle is placed on a pallet (or cage) and securely held as the system rotates vertically to bring the required car to the ground-level entry/exit point. This system is particularly suitable for residential complexes, office buildings, hotels, and commercial hubs where available land is scarce but additional parking capacity is needed. With a maximum capacity of up to 18 cars, it offers an economical and reliable alternative to traditional multi-level parking structures. The rotary design ensures faster parking and retrieval cycles, minimal land footprint, and reduced civil work compared to tower or puzzle systems. Moreover, it consumes less power, requires minimal maintenance, and can be installed in open spaces, basements, or alongside existing buildings.',
    image: rotaryparking,
    generalSpecifications: [
      { key: 'System Length', value: '6500 mm' },
      { key: 'System Width', value: '5200 mm' },
      { key: 'System Height', value: '21200 mm (depending on number of cars, up to 18 vehicles)' },
      { key: 'Pallet Width', value: '2000 mm – 2400 mm' },
      { key: 'Maximum Car Dimensions', value: [
        'Car Length: up to 5000 mm',
        'Car Width: up to 2000 mm',
        'Car Height: up to 1650 mm (standard) / 2000 mm (SUV variant)',
        'Car Weight: up to 2500 kg'
      ] },
    ],
    keyBenefits: [
      'Space Optimization: Requires only the footprint of 2 cars to park up to 16–18 vehicles.',
      'Compact & Efficient: Ideal for urban areas where land availability is a major constraint.',
      'Low Power Consumption: Hydraulic or motorized operation designed for energy efficiency.',
      'Quick Installation: Modular design makes setup faster compared to large-scale systems.',
      'Safety Assured: Equipped with advanced locking systems, overload protection, and anti-drop mechanisms.',
      'Cost-Effective Solution: Offers maximum capacity with minimum civil construction.',
    ]
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center max-w-md w-full">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#001f3f] mb-3">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            We couldn’t find the product you are looking for.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#f05a28] text-white rounded-lg shadow hover:bg-[#d94c1d] transition text-sm sm:text-base"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen mt-16 sm:mt-20 mb-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#001f3f] hover:text-[#f05a28] mb-6 sm:mb-8 transition font-medium text-sm sm:text-base"
        >
          <FaArrowLeftLong className="w-4 h-4 sm:w-5 sm:h-5" /> Back
        </button>

        {/* Product Header Section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 bg-white shadow-xl rounded-2xl overflow-hidden border-t-4 border-[#f05a28]">
          {/* Left: Image */}
          <div className="flex items-center justify-center p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl border-2 border-[#001f3f] w-full max-h-[350px] sm:max-h-[450px] md:max-h-[500px] object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001f3f] mb-3 sm:mb-4">
              {product.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6">
              {product.about}
            </p>

            {/* Key Benefits Short Highlights */}
            {(product.benefits || product.keyBenefits) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
                {(product.benefits || product.keyBenefits)
                  .slice(0, 4)
                  .map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#3bb7d2]/10 border-l-4 border-[#3bb7d2] rounded-lg px-3 py-2 text-xs sm:text-sm md:text-base shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#3bb7d2]" />
                      <span className="text-[#001f3f]">{b}</span>
                    </div>
                  ))}
              </div>
            )}

            <a href="/#contact" target="_parent" rel="noreferrer">
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#f05a28] to-[#ff7b54] text-white rounded-lg shadow-lg hover:scale-105 transition w-fit text-sm sm:text-base font-semibold">
                Enquire Now
              </button>
            </a>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#001f3f] flex items-center gap-2 mb-6 sm:mb-8">
            <Info className="w-6 h-6 sm:w-7 sm:h-7 text-[#3bb7d2]" /> General
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {product.generalSpecifications.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#3bb7d2]/30 rounded-xl p-5 sm:p-6 shadow hover:shadow-md transition"
              >
                <h4 className="text-base sm:text-lg font-semibold text-[#f05a28] mb-2">
                  {spec.key}
                </h4>
                {Array.isArray(spec.value) ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
                    {spec.value.map((v, i) => (
                      <li key={i}>{v}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm sm:text-base">
                    {spec.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        {(product.benefits || product.keyBenefits) && (
          <div className="mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#001f3f] flex items-center gap-2 mb-6 sm:mb-8">
              <Star className="w-6 h-6 sm:w-7 sm:h-7 text-[#f0c428]" /> Key
              Benefits of {product.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {(product.benefits || product.keyBenefits).map((benefit, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#3bb7d2]/10 to-[#001f3f]/5 rounded-xl p-4 sm:p-6 shadow flex items-start gap-2 sm:gap-3 hover:shadow-lg transition"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#f05a28] mt-0.5" />
                  <p className="text-gray-800 text-sm sm:text-base">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
