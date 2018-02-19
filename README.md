# Flux tabs not using specified background color when in top position

When using `tabBarPosition: top` in Router Flux, the `activeBackgroundColor`
and `inactiveBackgroundColor` properties are not applied.

In React Navigation the properties are applied when in both positions.

# Reproduce

You can run both of the apps included in this repo, changing the
`tabBarPosition` in each to see how the `activeBackgroundColor` behaves.
