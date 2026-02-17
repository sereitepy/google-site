import { ThemeTogglerButton } from '@/components/animate-ui/components/buttons/theme-toggler'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Settings } from 'lucide-react'

export default function SettingsSection() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Settings className='text-primary cursor-pointer hover:text-foreground' />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <div className='px-2 pb-2'>
              <ThemeTogglerButton />
            </div>
          </DropdownMenuGroup>
          {/* <DropdownMenuGroup> */}
          {/* <DropdownMenuSeparator /> */}
          {/* <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
          {/* </DropdownMenuGroup> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
