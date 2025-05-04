import { Location, RoutePoint, routeRepository } from "../../domain/repositories/routeRepository";

export class remoteRouteRepository implements routeRepository {

    async fetchRoutePoints(): Promise<RoutePoint[]> {
        return new Promise(resolve => {
            resolve(mockRoute);
        })
    }
    setStatus(routePoint: RoutePoint, status: string): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }
    setVisited(routePoint: RoutePoint, isVisited: true): Promise<RoutePoint> {
        throw new Error("Method not implemented.");
    }

}

const mockRoute: RoutePoint[] = [
  {
    id: 1,
    orderNumber: 1,
    type: 'stop',
    location: {
      id: 1,
      lat: 37.7749,
      lng: -122.4194,
      address: '123 Market St, San Francisco, CA 94103',
      friendlyAddress: 'ACME Warehouse',
      specialInstructions: ['Use loading dock entrance on 2nd St.'],
      notes: ['Gate code: 1234#']
    },
    visited: false,
    status: 'serviced',
    timeWindow: '2025-05-03T09:00:00Z/2025-05-03T12:00:00Z',
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        phoneNumber: '+1-555-123-4567',
        floor: 'Ground',
        department: 'Receiving',
        nameUnder: 'Main Desk',
        notes: 'Ask for John at the front office'
      }
    ],
    jobs: [
      {
        id: 1,
        orderNumber: 1,
        serviceType: 'pickup',
        status: 'pending',
        qrCode: 'JOB123PICKUP',
        specialInstructions: ['Handle with care', 'Pickup from dock #3'],
        notes: ['Confirm item count before loading'],
        items: [
          {
            id: 1,
            description: 'Empty Pallets',
            quantity: 10,
            qrCode: 'ITEM-PICK-001',
            specialInstructions: ['Stack flat'],
            notes: ['Customer expects 10 units']
          },
          {
            id: 2,
            description: 'Return Boxes',
            quantity: 5,
            qrCode: 'ITEM-PICK-002',
            specialInstructions: ['Seal before loading'],
            notes: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    orderNumber: 2,
    type: 'stop',
    location: {
      id: 2,
      lat: 37.7892,
      lng: -122.4016,
      address: '456 Mission St, San Francisco, CA 94105',
      friendlyAddress: 'TechCorp HQ',
      specialInstructions: ['Call reception on arrival'],
      notes: []
    },
    visited: false,
    status: 'serviced',
    timeWindow: '2025-05-03T13:00:00Z/2025-05-03T15:00:00Z',
    contacts: [
      {
        id: 2,
        name: 'Jane Smith',
        phoneNumber: '+1-555-987-6543',
        floor: '2nd',
        department: 'IT',
        nameUnder: 'Reception',
        notes: 'Deliver equipment to IT department'
      }
    ],
    jobs: [
      {
        id: 2,
        orderNumber: 1,
        serviceType: 'delivery',
        status: 'pending',
        qrCode: 'JOB456DELIVERY',
        specialInstructions: ['Deliver to IT storage room'],
        notes: [],
        items: [
          {
            id: 3,
            description: 'Laptops',
            quantity: 3,
            qrCode: 'ITEM-DEL-001',
            specialInstructions: ['Verify serial numbers'],
            notes: []
          },
          {
            id: 4,
            description: 'Monitors',
            quantity: 5,
            qrCode: 'ITEM-DEL-002',
            specialInstructions: [],
            notes: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    orderNumber: 3,
    type: 'stop',
    location: {
      id: 3,
      lat: 37.7600,
      lng: -122.4477,
      address: '789 Castro St, San Francisco, CA 94114',
      friendlyAddress: 'Medical Center',
      specialInstructions: ['Park at rear entrance'],
      notes: ['Access code: 5678#']
    },
    visited: false,
    status: 'serviced',
    timeWindow: '2025-05-03T16:00:00Z/2025-05-03T18:00:00Z',
    contacts: [
      {
        id: 3,
        name: 'Michael Johnson',
        phoneNumber: '+1-555-222-3333',
        floor: '1st',
        department: 'Pharmacy',
        nameUnder: 'Reception',
        notes: 'Deliver meds to pharmacy stockroom'
      }
    ],
    jobs: [
      {
        id: 3,
        orderNumber: 1,
        serviceType: 'delivery',
        status: 'pending',
        qrCode: 'JOB789DELIVERY',
        specialInstructions: ['Requires signature on delivery'],
        notes: ['Check expiration dates before leaving'],
        items: [
          {
            id: 5,
            description: 'Medical Supplies',
            quantity: 12,
            qrCode: 'ITEM-DEL-003',
            specialInstructions: ['Store below 25°C'],
            notes: []
          },
          {
            id: 6,
            description: 'Vaccine Kits',
            quantity: 8,
            qrCode: 'ITEM-DEL-004',
            specialInstructions: ['Keep refrigerated'],
            notes: []
          }
        ]
      }
    ]
  }
];
