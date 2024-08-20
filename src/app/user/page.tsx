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
import { Locate, Mail, Phone } from "lucide-react";

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
                <Mail className="h-5 w-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Locate className="h-5 w-5" />
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
                          ? "default"
                          : order.status === "Shipped"
                          ? "secondary"
                          : "destructive"
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
