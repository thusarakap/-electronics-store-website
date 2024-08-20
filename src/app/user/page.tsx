import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function UserProfile() {
  const user = {
    name: "Thusaraka Palliyeguru",
    email: "thusaraka@yahoo.co.uk",
    phone: "+94 (74) 1202-084",
    address: "226/3/2, Narangaskumbura Road, Kandy Sri Lanka",
    profileImage: "/ThusarakaPalliyeguru.jpg",
    orders: [
      {
        id: "ORD001",
        date: "2023-05-15",
        items: [
          { name: "Wireless Headphones", quantity: 1, price: 99.99 },
          { name: "Portable Charger", quantity: 1, price: 49.99 },
        ],
        status: "Delivered",
        total: 149.98,
      },
      {
        id: "ORD002",
        date: "2023-04-20",
        items: [{ name: "Smart TV", quantity: 1, price: 499.99 }],
        status: "Shipped",
        total: 499.99,
      },
      {
        id: "ORD003",
        date: "2023-03-01",
        items: [
          { name: "Gaming Mouse", quantity: 1, price: 79.99 },
          { name: "Mechanical Keyboard", quantity: 1, price: 129.99 },
        ],
        status: "Delivered",
        total: 209.98,
      },
    ],
  };
  
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        
        <div className="grid gap-4">
        
          <div className="flex flex-row items-center">
            <Avatar className="min-w-40 min-h-40 m-5 ml-4">
              <AvatarImage src={user.profileImage} alt={user.name} />
              <AvatarFallback>TP</AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-center ml-6">
              <div className="text-3xl font-bold">{user.name}</div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MailIcon className="h-5 w-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-5 w-5" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <LocateIcon className="h-5 w-5" />
                <span>{user.address}</span>
              </div>
            </div>
          </div>

          <Button variant="outline" className="">
            Edit Profile
          </Button>
          <Separator />
        </div>

        <div className="grid gap-4 bg-accent p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Order History</h2>
            <Button variant="outline" className=" border-primary-foreground">View All</Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order #</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {user.orders.map((order) => (
                <TableRow key={order.id} className="border-b border-muted-foreground hover:bg-muted-foreground">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <div className="grid gap-1">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <span>x{item.quantity}</span>
                        </div>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className=" border-primary-foreground"
                      variant={
                        order.status === "Delivered"
                          ? "success"
                          : order.status === "Shipped"
                          ? "info"
                          : "warning"
                      }
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    ${order.total.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
